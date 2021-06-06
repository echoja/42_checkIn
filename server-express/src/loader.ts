import { Controller } from "./controller";
import { Router } from "express";
import { Sequelize } from "sequelize";
import * as proxy from "express-http-proxy";
import {
  createRepository as createUserRepository,
  initController as initUserController,
  UserService,
  associate as userAssociate,
} from "@/entities/user";
import {
  createRepository as createCardRepository,
  initController as initCardController,
  CardService,
} from "@/entities/card";

import { client, jwtResolver } from "./auth";
import axios from "axios";

/** default router */
export const router = Router();
export const controller = new Controller(router);

/** sequelize (DAO) */
export const sequelize = new Sequelize({
  dialect: "mysql",
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT ?? "3306", 10),
});

/** repositories */
export const userRepository = createUserRepository(sequelize, "Users");
export const cardRepository = createCardRepository(sequelize, "Cards");

/** associations (table relation) */
userAssociate(userRepository, cardRepository);

/** services */
export const userService = new UserService(
  userRepository,
  cardRepository,
  client,
  axios.create()
);
export const cardService = new CardService(userRepository, cardRepository);

/** controllers */
initUserController(controller, userService);
initCardController(controller, cardService);

/** middlewares */
export const jwtResolverMiddleware = jwtResolver(userRepository);

export const syncDatabase = async (): Promise<void> => {
  await sequelize.sync();
};

export const inspectDatabase = async (tableName: string): Promise<void> => {
  try {
    const described = await sequelize
      .getQueryInterface()
      .describeTable(tableName);
    console.dir(described);
  } catch (e) {
    console.error(e);
  }
};

/** 프론트엔드 진입점 설정 */
if (process.env.NODE_ENV === "development")
  router.use("/", proxy("localhost:4000"));
else {
  // todo: react 빌드된 경로로 express.static 경로 생성
  // todo: react 프론트엔드가 SPA일 경우 connect-history-api-fall 설정
}

export const prodPort = 3000;
export const devPort = 29543;
