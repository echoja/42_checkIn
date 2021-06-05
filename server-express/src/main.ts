import * as express from "express";
import { config as dotenvConfigure } from "dotenv";
import * as cookieParser from "cookie-parser";
import * as path from "path";

dotenvConfigure({
  path:
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "../.env")
      : path.resolve(__dirname, "../.env.local"),
});

if (
  process.env.NODE_ENV !== "production" &&
  process.env.NODE_ENV !== "development"
) {
  console.error(
    "NODE_ENV 환경변수가 설정되어야 합니다. {production | development}"
  );
  process.exit(1);
}

import {
  devPort,
  prodPort,
  router,
  jwtResolverMiddleware,
  syncDatabase,
  inspectDatabase,
} from "./loader";

const webapp = express();
webapp.use(cookieParser());
webapp.use(jwtResolverMiddleware);
webapp.use(router);

const run = async () => {
  await syncDatabase();
  // await inspectDatabase("Users-test2");
  console.log("finished data sync");
  const port = process.env.NODE_ENV === "production" ? prodPort : devPort;
  webapp.listen(port, () => {
    console.log(`server is listening in ${process.env.NODE_ENV} mode`);
  });
};

run().catch((error) => {
  console.error("# webapp error");
  console.error(error);
  process.exit(1);
});
