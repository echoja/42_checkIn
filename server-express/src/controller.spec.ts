import { Controller } from "./controller";
import * as express from "express";
import * as supertest from "supertest";
import { HTTPMethod } from "./type";
import { createAgent } from "@test/util";

describe("global controller", () => {
  describe("use", () => {
    describe("METHODS", () => {
      it.each<[HTTPMethod]>([["POST"], ["GET"], ["DELETE"], ["PATCH"]])(
        "특정 path 대로 들어갔을 때 제대로 동작해야 함 (Method: %s)",
        async (method: HTTPMethod) => {
          const app = express();
          const router = express.Router();
          const controller = new Controller(router);
          controller.use(method, "/test", (req, res, next) => {
            res.status(200).send();
          });
          const agent = supertest(app);
          switch (method) {
            case "DELETE":
              agent
                .delete("/test")
                .expect(200)
                .end(() => {
                  /* empty */
                });
              break;
            case "GET":
              agent
                .get("/test")
                .expect(200)
                .end(() => {
                  /* empty */
                });
              break;
            case "POST":
              agent
                .post("/test")
                .expect(200)
                .end(() => {
                  /* empty */
                });
              break;
            case "PATCH":
              agent
                .patch("/test")
                .expect(200)
                .end(() => {
                  /* empty */
                });
              break;
            default:
              break;
          }
        }
      );
      it("메소드가 일치하지 않을 시 404 떠야 함", async () => {
        const router = express.Router();
        const controller = new Controller(router);
        controller.use("POST", "/test", (req, res, next) => {
          res.send(200);
        });
        const agent = createAgent(router);
        agent
          .get("/test")
          .expect(404)
          .end(() => {
            /* empty */
          });
      });
    });
    describe("option", () => {
      it("shouldBeAuthenticated 가 설정되고 인증된 상태일 경우 잘 동작해야 함", async () => {
        const router = express.Router();
        router.use((req, res, next) => {
          req.isAuthenticated = true; // 인증되었다고 가정
          next();
        });
        const controller = new Controller(router);
        controller.use(
          "GET",
          "/test",
          (req, res, next) => {
            res.status(200).send();
          },
          { shouldBeAuthenticated: true }
        );
        const agent = createAgent(router);
        const res = await agent.get("/test");
        expect(res.status).toEqual(200);
      });
      it("shouldBeAuthenticated 가 설정되었는데 인증되지 않았을 경우 에러가 발생해야 함", async () => {
        const router = express.Router();
        router.use((req, res, next) => {
          req.isAuthenticated = false; // 인증되어있지 않다고 가정
          next();
        });
        const controller = new Controller(router);
        controller.use(
          "GET",
          "/test",
          (req, res, next) => {
            res.status(200).send();
          },
          { shouldBeAuthenticated: true }
        );
        const agent = createAgent(router);
        const res = await agent.get("/test");
        expect(res.status).toEqual(401);
      });
      it("shouldBeAdmin 이 설정되고 admin 일 경우 잘 동작해야 함", async () => {
        const router = express.Router();
        router.use((req, res, next) => {
          req.isAdmin = true; // 관리자라고 가정
          next();
        });
        const controller = new Controller(router);
        controller.use(
          "GET",
          "/test",
          (req, res, next) => {
            res.status(200).send();
          },
          { shouldBeAdmin: true }
        );
        const agent = createAgent(router);
        const res = await agent.get("/test");
        expect(res.status).toEqual(200);
      });
      it("shouldBeAdmin 이 설정되었는데 인증되지 않았을 경우 에러가 발생해야 함", async () => {
        const router = express.Router();
        const controller = new Controller(router);
        controller.use(
          "GET",
          "/test",
          (req, res, next) => {
            res.status(200).send();
          },
          { shouldBeAdmin: true }
        );
        const agent = createAgent(router);
        const res = await agent.get("/test");
        expect(res.status).toEqual(401);
      });
    });
  });
});
