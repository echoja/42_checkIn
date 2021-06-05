import { Sequelize } from "sequelize/types";
import { CardRepository, CardType, JWTPayload, UserRepository } from "@/type";
import * as express from "express";
import { testDB } from "@test/util";
import { client, jwtResolver, jwtSecret } from "@/auth";
import * as sinon from "sinon";
import axios from "axios";
import * as jwt from "jsonwebtoken";
import * as supertest from "supertest";
import { createRepository as createUserRepository } from "../user";
import { createRepository as createCardRepository } from "./card.repository";
import { CardService } from "./card.service";
import { GAEPO, SEOCHO } from "@/const";

describe("card.service", () => {
  const cardTableName = "card_service_spec_card";
  const userTableName = "card_service_spec_user";
  let sequelize: Sequelize;
  let user: UserRepository;
  let card: CardRepository;
  let handler: express.Handler;
  let router: express.Router;
  let cardService: CardService;

  beforeAll(async () => {
    sequelize = await testDB();
    user = createUserRepository(sequelize, userTableName);
    card = createCardRepository(sequelize, cardTableName);
    cardService = new CardService(user, card);
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
    await sequelize.getQueryInterface().dropTable(cardTableName);
    await sequelize.getQueryInterface().dropTable(userTableName);
  });

  afterEach(async () => {
    await card.destroy({ truncate: true });
  });

  describe("create", () => {
    it("end - start - 1만큼 생성되어야 함", async () => {
      await cardService.create(SEOCHO, 0, 10);
      const all = await card.findAll();
      expect(all.length).toEqual(10);
    });
    it.each<[CardType]>([[SEOCHO], [GAEPO]])(
      "type 이 제대로 설정되어야 함: %d",
      async (type: CardType) => {
        await cardService.create(type, 0, 10);
        const all = await card.findAll();
        expect(all.every((card) => card.type === type)).toEqual(true);
      }
    );
  });
});
