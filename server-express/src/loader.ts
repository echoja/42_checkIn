import { Controller } from "./controller";
import { Handler, Router } from "express";
import { ModelCtor, Sequelize } from "sequelize";

import initUser from "./entities/user";
import { jwtResolver, jwtSecret } from "./auth";
import { JWTPayload, UserAttr, UserInstance } from "./type";
import { aw, pick, safeJwtVerify } from "./util";

export const router = Router();

export const controller = new Controller(router);

export const sequelize = new Sequelize({
  dialect: "mysql",
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
});

/** models */
export const user = initUser({ controller, sequelize });


/** middlewares */
export const jwtResolverMiddleware = jwtResolver(user);

// const modelGlobs = path.resolve(__dirname, "./entities/**/*.model.ts");

// export const sequelize = new Sequelize({
//   dialect: "mysql",
//   database: process.env.DATABASE_NAME,
//   username: process.env.DATABASE_USERNAME,
//   password: process.env.DATABASE_PASSWORD,
//   host: process.env.DATAGASE_HOST,

//   models: [modelGlobs],
//   modelMatch: (filename, member) => {
//     // console.log(filename);
//     // console.log(member);
//     return (
//       filename.substring(0, filename.indexOf(".model")) === member.toLowerCase()
//     );
//   },
// });

// sequelize
//   .sync()
//   .then((value) => {
//     User.create({
//       email: "abc",
//       userId: 1,
//       userName: "ho",
//     })
//       .then((value) => {
//         console.log("save success");
//         console.dir(value);
//         User.findAll().then((value) => {
//           console.log(`found: ${value.length}`);
//         });
//       })
//       .catch((error) => {
//         console.error("Test User making Failed");
//         console.error(error);
//       });
//   })
//   .catch((error) => {
//     console.error("sync failed");
//     console.error(error);
//   });

// db connection test
// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// })();

export const prodPort = 3000;
export const devPort = 29543;
