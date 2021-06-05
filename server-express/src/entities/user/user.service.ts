import { jwtSecret } from "@/auth";
import type {
  Api42Me,
  CardRepository,
  JWTPayload,
  UserAttr,
  UserRepository,
} from "@/type";
import { GAEPO, SEOCHO } from "@/const";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import * as jwt from "jsonwebtoken";
import { Response } from "express";
import { AccessToken, AuthorizationCode } from "simple-oauth2";

export class UserService {
  user: UserRepository;
  card: CardRepository;
  client: AuthorizationCode<"client_id">;
  axios: AxiosInstance;

  constructor(
    user: UserRepository,
    card: CardRepository,
    client: AuthorizationCode<"client_id">,
    axios: AxiosInstance
  ) {
    this.user = user;
    this.card = card;
    this.client = client;
    this.axios = axios;
  }

  /**
   * login callback 을 처리합니다.
   * @param code Authorization 코드
   * @param res 응답 객체
   */
  async handleLoginCallback(code: string, res: Response): Promise<void> {
    // access_token 및 refresh_token 을 받아옵니다.
    let token_res: AccessToken;
    try {
      token_res = await this.client.getToken({
        code,
        redirect_uri: process.env.CLIENT_CALLBACK ?? "",
      });
      // console.log("The resulting token: ");
      // console.dir(token_res.token);
      // return res.status(200).json(token_res.token);
    } catch (error) {
      console.error("Request Access Token Error", error.message);
      res.status(500).send("Authentication failed");
      return;
    }
    // console.log("# user.controller.ts login callback access token success");
    // console.dir(token_res.token);

    // 사용자 정보를 얻어옵니다.
    let userInfoRes: AxiosResponse;
    try {
      userInfoRes = await this.axios.get("https://api.intra.42.fr/v2/me", {
        headers: {
          Authorization: `Bearer ${token_res.token.access_token}`,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Fetching user data failed");
      return;
    }

    // 42 API 로부터 받아온 데이터에 email, id 가 없을 경우
    // 잘못된 경우입니다. (API 업데이트 등에 따른 충돌)
    const userData: Api42Me = userInfoRes.data;
    if (
      typeof userData.email !== "string" ||
      typeof userData.id !== "number" ||
      typeof userData.login !== "string"
    ) {
      res.status(500).send("42 v2/me api conflicts");
      return;
    }
    // console.log(`# user.controller.ts User Data Success ${userData.login}`);

    // 사용자 정보가 DB에 없을 경우 추가합니다.
    const found = await this.user.findOne({
      where: {
        userId: userData.id,
      },
    });
    if (!found) {
      await this.user.create({
        email: userData.email,
        userId: userData.id,
        userName: userData.login,
      });
    }

    // JWT TOKEN을 만들고 쿠키에 기록합니다.
    const payload: JWTPayload = {
      access_token: token_res.token.access_token,
      refresh_token: token_res.token.refresh_token,
      expires_at: token_res.token.expires_at,
      email: userData.email,
      id: userData.id,
    };

    const jwtToken = jwt.sign(payload, jwtSecret);
    // console.log("# user.controller.ts login callback jwt Token success");
    // console.dir(jwtToken);

    res.cookie("w_auth", jwtToken);
    res.status(200).json(token_res.token);
  }

  async handleCheckIn(userDBId: number, cardId: number): Promise<void> {
    // 카드 상태를 확인합니다. → 없는 카드이거나 사용중이면 exception 반환
    // 카드 유효성 확인
    const card = await this.card.findOne({ where: { cardId } });
    if (!card) throw new Error("Card Not Found");
    if (card.using) throw new Error("Card Already Being Used");

    // 현재 이용자 수 확인
    const usingCard = (
      await this.card.findAll({
        where: { using: true, type: card.type },
      })
    ).length;
    // 최대 인원이 다 찼으면 체크인 불가
    if (usingCard >= 150 && card.type === GAEPO) {
      throw new Error("Gaepo exceeded");
    }
    if (usingCard >= 90 && card.type == SEOCHO) {
      throw new Error("Seocho exceeded");
    }

    //대기자 수와 현재 사용자 수 합쳐서 150명 넘으면 대기자만 체크인 가능
    // const waitingNum = (await this.waitingService.waitingList(card.getType()))
    //   .length;
    // if (waitingNum > 0) {
    //   const waiting = await this.waitingRepository.findOne({
    //     where: { userId: id, deleteType: null },
    //   });
    //   if (!waiting && waitingNum + usingCard >= 150)
    //     throw new NotFoundException();
    //   else if (waiting)
    //     await this.waitingService.delete(waiting.getId(), "checkIn");
    // }
    //대기자 명단에 없으면 NotFoundException

    //모두 통과 후 카드 사용 프로세스
    card.using = true;
    await card.save();
    await this.user.update(
      { cardId: card.cardId },
      {
        where: {
          _id: userDBId,
        },
      }
    );

    // card.useCard();
    // await this.cardRepository.save(card);
    // const user = await this.userRepository.setCard(id, card);
    //카드 사용 프로세스 종료

    // 해당 클러스터 사용자 수를 확인합니다 → 150명 이상이면 exception 반환
    // 카드를 사용 중인 상태로 변경합니다.
    // 사용자에게 카드 번호를 세팅합니다.
    // todo: (디스코드로 잔여 좌석 수를 알립니다.)
    // todo: 체크인 로그를 생성합니다.
  }

  async handleCheckOut(userDBId: number): Promise<void> {
    // this.logger.debug('checkOut start');
    // this.logger.debug('user _id', id);

    //반납 프로세스
    // const card = await this.userRepository.getCard(id);
    const userFound = await this.user.findOne({
      include: [
        {
          model: this.card,
          attributes: ["using", "cardId", "type"],
          as: "card",
        },
      ],
      where: { _id: userDBId },
    });

    // console.log(userFound);
    if (!userFound) throw new Error("User Not Found");

    if (!userFound.card) throw new Error("User Has No Card");

    const cardId = userFound.cardId;
    userFound.cardId = null;
    await Promise.allSettled([
      userFound.save(),
      this.card.update({ using: false }, { where: { cardId } }),
    ]);
    // const type = card.getType();
    // await this.cardRepository.returnCard(card);
    // const user = await this.userRepository.clearCard(id);
    // //반납 프로세스 종료

    // //사용량 조회
    // const usingCard = (
    //   await this.cardRepository.find({
    //     where: { using: true, type: type },
    //   })
    // ).length;

    //한자리 났다고 노티
    // await this.noticer(type, usingCard);

    // //대기열 카운트 다운 시작
    // await this.waitingService.wait(149 - usingCard, type);

    // //로그 생성
    // await this.logService.createLog(user, card, 'checkOut');
  }
}
