// export const me = (client: AuthorizationCode, )

import { JWTPayload, UserAttr, UserInstance } from "./type";
import { Handler, Router } from "express";
import { ModelCtor, Sequelize } from "sequelize";
import { aw, pick, safeJwtVerify } from "./util";

export const jwtSecret = process.env.JWT_SECRET ?? "default-jwt-secret";

export const jwtResolver = (user: ModelCtor<UserInstance>): Handler => {
  return aw(async (req, res, next) => {
    req.isAuthenticated = false;

    // 쿠키로부터 JWT Token 을 받아올 수 없을 때 인증되지 않음.
    const jwtToken: string | undefined = req.cookies.w_auth;
    if (typeof jwtToken !== "string") {
      console.log("# jwtResolver no jwt token from request");
      next();
      return;
    }
    // JWT로부터 Payload 를 불러옵니다.
    let payload: JWTPayload;
    try {
      payload = safeJwtVerify(jwtToken, jwtSecret, [
        "id",
        "email",
        "access_token",
        "refresh_token",
        "expires_at",
      ]);
    } catch (error) {
      // 잘못된 jwt token이거나 유효기간이 만료되었을 때 인증되지 않음.
      console.log("# jwtResolver jwt verify failed");
      next();
      return;
    }

    // jwt token 의 내용으로 유저를 찾을 수 없을 때 인증되지 않음.
    const found = await user.findOne({
      where: {
        userId: payload.id,
      },
    });
    if (found === null) {
      next();
      return;
    }

    // req에 인증 관련 정보 추가
    req.isAuthenticated = true;
    req.user = pick(found, [
      "email",
      "userName",
      "userId",
      "cardId",
      "isAdmin",
    ]);

    // JWT 의 정보로부터 유저의 정보를 가져옵니다.
    console.log("# jwtResolver payload verify success");
    console.dir(payload);
    next();
  });
};
