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

import { devPort, prodPort, router, jwtResolverMiddleware } from "./loader";

const webapp = express();
webapp.use(cookieParser());
webapp.use(jwtResolverMiddleware);
webapp.use(router);

webapp.listen(devPort, () => {
  console.log(`server is listening in ${process.env.NODE_ENV} mode`);
});


