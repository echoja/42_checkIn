import { createAgent, testDB } from "@test/util";
import { jwtResolver, jwtSecret } from "./auth";
import * as express from "express";
import { createRepository } from "./entities/user";
import { Sequelize } from "sequelize/types";
import { JWTPayload, UserAttr, UserRepository } from "./type";
import * as jwt from "jsonwebtoken";

describe("auth", () => {
  describe("jwtResolver", () => {
    const tableName = "auth_jwtResolver_test";
    let sequelize: Sequelize;
    let user: UserRepository;
    let handler: express.Handler;
    let router: express.Router;

    beforeAll(async () => {
      sequelize = await testDB();
      user = createRepository(sequelize, tableName);
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

    afterAll(async () => {
      await sequelize.getQueryInterface().dropTable(tableName);
    });

    afterEach(async () => {
      await user.destroy({ truncate: true });
    });

    it("유저의 정보를 DB 에서 찾을 수 없을 때 req.isAuthenticated === false 여야 함 ", async () => {
      const agent = createAgent(router);
      const payload: JWTPayload = {
        access_token: "123",
        refresh_token: "456",
        expires_at: new Date().toISOString(),
        email: "nono",
        id: 123,
      };
      const token = jwt.sign(payload, jwtSecret);
      const res = await agent
        .post("/")
        .set("Cookie", [`w_auth=${token}`])
        .send();
      expect(res.status).toEqual(200);
      expect(res.body).toEqual({ isAuthenticated: false });
    });
    it("w_auth 쿠키를 찾을 수 없을 때 req.isAuthenticated === false 여야 함", async () => {
      const agent = createAgent(router);
      await agent.post("/").send().expect(200, { isAuthenticated: false });
    });
    it("w_auth 쿠키를 해석할 수 없을 때 req.isAuthenticated === false 여야 함 ", async () => {
      const agent = createAgent(router);
      const res = await agent
        .post("/")
        .set("Cookie", ["w_auth=12345667"])
        .send()
        .expect(200, { isAuthenticated: false });
    });

    it("기본 동작이 제대로 동작해야 함.", async () => {
      const agent = createAgent(router);
      await user.create({
        email: "hi",
        userId: 1234,
        userName: "hu",
      });
      const payload: JWTPayload = {
        access_token: "123",
        refresh_token: "456",
        expires_at: new Date().toISOString(),
        email: "",
        id: 1234,
      };
      const token = jwt.sign(payload, jwtSecret);
      // console.log(`created _id: ${_id}`);
      const res = await agent.post("/").set("Cookie", [`w_auth=${token}`]);
      expect(res.status).toEqual(200);
      expect(res.body.user.email).toEqual("hi");
      expect(res.body.user.userId).toEqual(1234);
      expect(res.body.user.userName).toEqual("hu");
    });
    it("어드민이라면 req.isAdmin === true 여야 함.", async () => {
      const agent = createAgent(router);
      const created = await user.create({
        email: "hi",
        userId: 1234,
        userName: "hu",
        isAdmin: true,
      });
      const payload: JWTPayload = {
        access_token: "123",
        refresh_token: "456",
        expires_at: new Date().toISOString(),
        email: "",
        id: 1234,
      };
      const token = jwt.sign(payload, jwtSecret);
      // console.log(`created _id: ${_id}`);
      // console.log(created);
      const res = await agent.post("/").set("Cookie", [`w_auth=${token}`]);
      expect(res.status).toEqual(200);
      expect(res.body.isAdmin).toEqual(true);
    });
    it("어드민이 아니라면 req.isAdmin === false 여야 함.", async () => {
      const agent = createAgent(router);
      await user.create({
        email: "hi",
        userId: 1234,
        userName: "hu",
        isAdmin: false,
      });
      const payload: JWTPayload = {
        access_token: "123",
        refresh_token: "456",
        expires_at: new Date().toISOString(),
        email: "",
        id: 1234,
      };
      const token = jwt.sign(payload, jwtSecret);
      // console.log(`created _id: ${_id}`);
      const res = await agent.post("/").set("Cookie", [`w_auth=${token}`]);
      expect(res.status).toEqual(200);
      expect(res.body.isAdmin).toEqual(false);
    });
  });
});
