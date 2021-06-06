import { UserService } from "./user.service";
// import axios from "axios";
import {
  associate,
  createRepository as createUserRepository,
} from "./user.repository";
import { createRepository as createCardRepository } from "../card/card.repository";
import { Sequelize } from "sequelize/types";
import {
  CardInstance,
  CardRepository,
  CardType,
  JWTPayload,
  UserRepository,
} from "@/type";
import * as express from "express";
import { testDB } from "@test/util";
import { client, jwtResolver, jwtSecret } from "@/auth";
import * as sinon from "sinon";
import axios from "axios";
import * as jwt from "jsonwebtoken";
import * as supertest from "supertest";
import { GAEPO, SEOCHO } from "@/const";

describe("user service", () => {
  const userTableName = "user_service_test";
  const cardTableName = "user_service_test_card";
  let sequelize: Sequelize;
  let user: UserRepository;
  let card: CardRepository;
  let handler: express.Handler;
  let router: express.Router;

  beforeAll(async () => {
    sequelize = await testDB();
    user = createUserRepository(sequelize, userTableName);
    card = createCardRepository(sequelize, cardTableName);
    associate(user, card);
    handler = jwtResolver(user);
    router = express.Router();
    router.use(handler, (req, res, next) => {
      res.json({
        isAuthenticated: req.isAuthenticated,
        user: req.user,
        isAdmin: req.isAdmin,
      });
    });
    await sequelize.sync();
  });
  const axiosMock = axios.create();
  sinon.replace(
    axiosMock,
    "get",
    sinon.fake(() => ({
      data: {
        email: "hi",
        id: 123,
        login: "taehokim",
      },
    }))
  );

  const clientMock = client;
  sinon.replace(
    clientMock,
    "getToken",
    sinon.fake(() => ({
      token: {
        access_token: "123",
        refresh_token: "456",
        expires_at: "789",
      },
    }))
  );

  afterAll(async () => {
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await sequelize.getQueryInterface().dropTable(userTableName);
    await sequelize.getQueryInterface().dropTable(cardTableName);
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
  });

  afterEach(async () => {
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await user.destroy({ truncate: true, cascade: true });
    await card.destroy({ truncate: true, cascade: true });
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
  });

  describe("handleLoginCallback (mocked Axios, client)", () => {
    it("성공시 응답이 302(redirect) 이 되어야 함.", async () => {
      const userService = new UserService(user, card, clientMock, axiosMock);
      const app = express();
      app.use("/", async (req, res, next) => {
        await userService.handleLoginCallback("", res);
      });
      const agent = supertest(app);
      const res = await agent.post("/");
      expect(res.status).toEqual(302);
    });
    it("성공시 리디렉션의 지점은 /submit 이 되어야 함", async () => {
      const userService = new UserService(user, card, clientMock, axiosMock);
      const app = express();
      app.use("/", async (req, res, next) => {
        await userService.handleLoginCallback("", res);
      });
      const agent = supertest(app);
      const res = await agent.post("/");
      expect(res.headers["location"]).toEqual("/submit");
    });
    it("성공시 w_auth 쿠키가 설정되어야 함.", async () => {
      const userService = new UserService(user, card, clientMock, axiosMock);
      const app = express();
      app.use("/", (req, res, next) => {
        userService.handleLoginCallback("", res);
      });
      const agent = supertest(app);
      const res = await agent.post("/");
      const cookieString: string = res.headers["set-cookie"];
      const cookieStrings = cookieString[0].split(";");
      expect(typeof cookieStrings[0]).toEqual("string");
      const keyValue = cookieStrings[0].split("=");
      expect(keyValue[0]).toEqual("w_auth");
      expect(typeof keyValue[1]).toEqual("string");
    });
    it("성공시 w_auth 쿠키의 값이 제대로 decode 되어야 함.", async () => {
      const userService = new UserService(user, card, clientMock, axiosMock);
      const app = express();
      app.use("/", (req, res, next) => {
        userService.handleLoginCallback("", res);
      });
      const agent = supertest(app);
      const res = await agent.post("/");
      const cookieString: string = res.headers["set-cookie"];
      const cookieStrings = cookieString[0].split(";");
      const keyValue = cookieStrings[0].split("=");
      const verified: string | Partial<JWTPayload> = jwt.verify(
        keyValue[1],
        jwtSecret
      );
      if (typeof verified === "string") {
        throw new Error("verified should not be a string");
      }
      expect(verified.access_token).toEqual("123");
      expect(verified.refresh_token).toEqual("456");
      expect(verified.expires_at).toEqual("789");
      expect(verified.id).toEqual(123);
      expect(verified.email).toEqual("hi");
    });
    it("성공시 사용자가 없다면 새로운 사용자가 만들어져야 함.", async () => {
      const userService = new UserService(user, card, clientMock, axiosMock);
      const app = express();
      app.use("/", (req, res, next) => {
        userService.handleLoginCallback("", res);
      });
      const agent = supertest(app);
      const res = await agent.post("/");
      const found = await user.findAll();
      expect(found.length).toEqual(1);
      expect(found[0].email).toEqual("hi");
      expect(found[0].userId).toEqual(123);
      expect(found[0].userName).toEqual("taehokim");
    });
    it("성공시 사용자가 있다면 아무런 변화가 없어야 함.", async () => {
      await user.create({
        email: "new hi",
        userId: 123,
        userName: "new taehokim",
      });
      const userService = new UserService(user, card, clientMock, axiosMock);
      const app = express();
      app.use("/", (req, res, next) => {
        userService.handleLoginCallback("", res);
      });
      const agent = supertest(app);
      const res = await agent.post("/");
      const found = await user.findAll();
      expect(found.length).toEqual(1);
    });
  });
  describe("handleCheckIn", () => {
    it("성공시 카드의 using 이 true 여야 함", async () => {
      await card.create({ type: GAEPO, cardId: 10, using: false });
      const userCreated = await user.create({
        email: "hi",
        userId: 123,
        userName: "ho",
      });
      const userService = new UserService(user, card, clientMock, axiosMock);
      await userService.handleCheckIn(userCreated._id, 10);

      const cardFound = await card.findOne({ where: { cardId: 10 } });
      if (!cardFound) throw new Error();
      expect(cardFound.using).toEqual(true);
    });

    it("성공시 사용자의 cardId 가 해당 카드로 변경되어야 함.", async () => {
      await card.create({ type: GAEPO, cardId: 10, using: false });
      const userCreated = await user.create({
        email: "hi",
        userId: 123,
        userName: "ho",
      });
      const userService = new UserService(user, card, clientMock, axiosMock);
      await userService.handleCheckIn(userCreated._id, 10);

      const userFound = await user.findOne({ where: { _id: userCreated._id } });
      if (!userFound) throw new Error();
      expect(userFound.cardId).toEqual(10);
    });

    it("사용중일 때 에러가 발생해야 함.", async () => {
      await card.create({ type: GAEPO, cardId: 10, using: true });
      let errored = false;
      const userCreated = await user.create({
        email: "hi",
        userId: 123,
        userName: "ho",
      });
      const userService = new UserService(user, card, clientMock, axiosMock);
      try {
        await userService.handleCheckIn(userCreated._id, 10);
      } catch (e) {
        errored = true;
      }
      expect(errored).toEqual(true);
    });

    it.each<[string, number, CardType]>([
      ["개포", 150, GAEPO],
      ["서초", 90, SEOCHO],
    ])(
      "클러스터가 %s일 때 최대 인원(%d) 이상이면 에러가 발생해야 함",
      async (name, max, type) => {
        let errored = false;
        const promises: Promise<CardInstance>[] = [];
        for (let i = 0; i <= max; i++) {
          promises.push(card.create({ type, cardId: i, using: true }));
        }
        await Promise.allSettled(promises);
        await card.create({ type, cardId: max + 1, using: false });
        const userCreated = await user.create({
          email: "hi",
          userId: 123,
          userName: "ho",
        });
        const userService = new UserService(user, card, clientMock, axiosMock);
        try {
          const found = await card.findAll();
          await userService.handleCheckIn(userCreated._id, max + 1);
        } catch (e) {
          errored = true;
        }
        expect(errored).toEqual(true);
      }
    );

    it.each<[string, number, CardType]>([
      ["개포", 150, GAEPO],
      ["서초", 90, SEOCHO],
    ])(
      "클러스터가 %s일 때 최대 인원(%d) 미만이면 에러가 발생하지 않아야 함.",
      async (name, max, type) => {
        let errored = false;
        const promises: Promise<CardInstance>[] = [];
        for (let i = 0; i < max; i++) {
          promises.push(card.create({ type, cardId: i, using: true }));
        }
        await Promise.allSettled(promises);
        await card.create({ type, cardId: max, using: false });
        const userCreated = await user.create({
          email: "hi",
          userId: 123,
          userName: "ho",
        });
        const userService = new UserService(user, card, clientMock, axiosMock);
        try {
          await userService.handleCheckIn(userCreated._id, max);
        } catch (e) {
          errored = true;
        }
        expect(errored).toEqual(false);
      }
    );
  });
  describe("handleCheckOut", () => {
    it("성공시 카드의 using이 false 로 변해야 함", async () => {
      const cardCreated = await card.create({ type: GAEPO, using: true });
      const userCreated = await user.create({
        email: "hi",
        userId: 123,
        userName: "ho",
        cardId: cardCreated.cardId,
      });
      const userService = new UserService(user, card, clientMock, axiosMock);
      await userService.handleCheckOut(userCreated._id);
      const cardFound = await card.findOne({
        where: { cardId: cardCreated.cardId },
      });
      expect(cardFound?.using).toEqual(false);
    });
    it("성공시 유저의 cardId 가 설정되어 있지 않아야 함", async () => {
      const cardCreated = await card.create({ type: GAEPO, using: true });
      const userCreated = await user.create({
        email: "hi",
        userId: 123,
        userName: "ho",
        cardId: cardCreated.cardId,
      });
      const userService = new UserService(user, card, clientMock, axiosMock);
      await userService.handleCheckOut(userCreated._id);
      const userFound = await user.findOne({ where: { _id: userCreated._id } });
      expect(userFound?.cardId).toEqual(null);
    });
    it("사용자의 카드가 없을 경우 실패해야 함", async () => {
      let error = false;
      let msg = "";
      try {
        const userCreated = await user.create({
          email: "hi",
          userId: 123,
          userName: "ho",
        });
        const userService = new UserService(user, card, clientMock, axiosMock);
        await userService.handleCheckOut(userCreated._id);
      } catch (e) {
        error = true;
        msg = e.message;
      }
      expect(error).toEqual(true);
      expect(msg).toEqual("User Has No Card");
    });
    it("사용자가 없을 경우 실패해야 함", async () => {
      let error = false;
      let msg = "";
      try {
        const userService = new UserService(user, card, clientMock, axiosMock);
        await userService.handleCheckOut(123);
      } catch (e) {
        error = true;
        msg = e.message;
      }
      expect(error).toEqual(true);
      expect(msg).toEqual("User Not Found");
    });
  });
});
