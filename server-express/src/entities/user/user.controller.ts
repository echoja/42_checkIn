import { Api42Me, Controller, JWTPayload, UserInstance } from "@/type";
import { AuthorizationCode, ModuleOptions, AccessToken } from "simple-oauth2";
import * as jwt from "jsonwebtoken";
import axiosStatic, { AxiosResponse } from "axios";
import { aw } from "@/util";
import { jwtSecret } from "@/auth";
import { ModelCtor } from "sequelize/types";

const axios = axiosStatic.create();

export const authOptions: ModuleOptions<"client_id"> = {
  client: {
    id: process.env.CLIENT_ID ?? "",
    secret: process.env.CLIENT_SECRET ?? "",
  },
  auth: {
    authorizeHost: "https://api.intra.42.fr",
    authorizePath: "/oauth/authorize",
    tokenHost: "https://api.intra.42.fr",
    tokenPath: "/oauth/token",
  },
};

export const client = new AuthorizationCode(authOptions);

export const controllerInit = (
  controller: Controller,
  user: ModelCtor<UserInstance>
): void => {
  // controller.use("/api/user/login", (req, res, next) => {

  // });

  /**
   * LOGIN CALLBACK
   */
  controller.get(
    "/api/user/login/callback",
    aw(async (req, res, next) => {
      // console.log("# user.controller.ts callback");
      // console.log(req.query);

      // url 쿼리에서 code가 설정되어 있어야 합니다.
      if (typeof req.query.code !== "string") {
        res.status(400).send();
        return;
      }
      const code: string = req.query.code;

      // access_token 및 refresh_token 을 받아옵니다.
      let token_res: AccessToken;
      try {
        token_res = await client.getToken({
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
      console.log("# user.controller.ts login callback access token success");
      console.dir(token_res.token);

      // 사용자 정보를 얻어옵니다.
      let userInfoRes: AxiosResponse;
      try {
        userInfoRes = await axios("https://api.intra.42.fr/v2/me", {
          method: "get",
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
      console.log(`# user.controller.ts User Data Success ${userData.login}`);

      // 사용자 정보가 DB에 없을 경우 추가합니다.
      const found = await user.findOne({
        where: {
          userId: userData.id,
        },
      });
      if (!found) {
        await user.create({
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
        id: `${userData.id}`,
      };

      const jwtToken = jwt.sign(payload, jwtSecret);
      console.log("# user.controller.ts login callback jwt Token success");
      console.dir(jwtToken);

      res.cookie("w_auth", jwtToken);
      res.status(200).json(token_res.token);
    })
  );

  /**
   * LOGIN
   */
  controller.get("/api/user/login", (req, res, next) => {
    console.log("# cookies");
    console.log(req.path);
    console.dir(req.cookies);

    const authorizationUri = client.authorizeURL({
      redirect_uri: process.env.CLIENT_CALLBACK ?? "",
      scope: "public",
    });

    res.redirect(authorizationUri);
  });

  controller.get(
    "/api/user/status",
    aw(async (req, res, next) => {
      const message = {
        user: req.user,
        authenticated: req.isAuthenticated
      }
      res.json(message);
    })
  );
};
