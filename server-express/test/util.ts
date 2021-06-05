import * as express from "express";
import * as supertest from "supertest";
import * as path from "path";
import { config as dotenvConfigure } from "dotenv";
import { Sequelize } from "sequelize";
import cookieParser = require("cookie-parser");
import { UserRepository } from "@/type";
import { createRepository } from "@/entities/user";
import { jwtResolver } from "@/auth";
import { isFalse } from "@/util";

// export function createAgent(router: express.Router): {agent: supertest.SuperTest<supertest.Test>, end: supertest.Test['end']} {
export function createAgent(
  router: express.Router
): supertest.SuperTest<supertest.Test> {
  const app = express();
  app.use(cookieParser());
  app.use(router);
  const agent = supertest(app);
  return agent;
}

export interface CreateRouterArgs {
  tableName?: string;
  beforeAll?: jest.Lifecycle;
  afterAll?: jest.Lifecycle;
  beforeEach?: jest.Lifecycle;
  afterEach?: jest.Lifecycle;
}

// export function prepareTestWebapp(args: CreateRouterArgs) {
//   const { beforeAll, afterAll, afterEach, beforeEach, tableName } = args;
//   const router = express.Router();
//   if (!beforeAll) return router;
//   let sequelize: Sequelize;
//   let user: UserRepository;
//   let handler: express.Handler;
//   sequelize = 
//   beforeAll(async () => {
//     sequelize = await testDB();
//     user = createRepository(sequelize, tableName);
//     handler = jwtResolver(user);
//     router.use(handler, (req, res, next) => {
//       res.json({
//         isAuthenticated: req.isAuthenticated,
//         user: req.user,
//         isAdmin: req.isAdmin,
//       });
//       // res.send(req.isAuthenticated);
//     });
//     await sequelize.sync();
//   });
// }

dotenvConfigure({
  path:
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "../.env")
      : path.resolve(__dirname, "../.env.local"),
});

export async function testDB(): Promise<Sequelize> {
  if (typeof process.env.TEST_DATABASE_HOST !== "string")
    throw new Error("TEST_DATABASE_HOST env must be set");
  if (typeof process.env.TEST_DATABASE_NAME !== "string")
    throw new Error("TEST_DATABASE_NAME env must be set");
  if (typeof process.env.TEST_DATABASE_PASSWORD !== "string")
    throw new Error("TEST_DATABASE_PASSWORD env must be set");
  if (typeof process.env.TEST_DATABASE_PORT !== "string")
    throw new Error("TEST_DATABASE_PORT env must be set");
  if (typeof process.env.TEST_DATABASE_USERNAME !== "string")
    throw new Error("TEST_DATABASE_USERNAME env must be set");

  const sequelize = new Sequelize({
    dialect: "mysql",
    database: process.env.TEST_DATABASE_NAME,
    username: process.env.TEST_DATABASE_USERNAME,
    password: process.env.TEST_DATABASE_PASSWORD,
    host: process.env.TEST_DATABASE_HOST,
    port: parseInt(process.env.TEST_DATABASE_PORT, 10),
    logging: isFalse(process.env.TEST_DB_LOG) ? false : true,
    // logQueryParameters: isFalse(process.env.TEST_DB_LOG) ? false : true,
  });
  await sequelize.sync();

  return sequelize;
}
