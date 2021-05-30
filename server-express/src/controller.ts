import axios from "axios";
import { Handler, Router } from "express";
import { ControllerOptions, HTTPMethod } from "@/type";

export class Controller {
  router: Router;
  constructor(router: Router) {
    this.router = router;
  }
  get(path: string, handler: Handler, options?: ControllerOptions): void {
    this.use("get", path, handler, options);
  }
  use(
    method: HTTPMethod,
    path: string,
    handler: Handler,
    options?: ControllerOptions
  ): void {
    const structedHandler: Handler = (req, res, next) => {
      // 메소드가 다를 경우 아무것도 하지 않고 넘어갑니다.
      if (req.method !== method) {
        next();
        return;
      }
      // options 처리
      if (options) {
        // shouldBeAuthenticated 설정이 되어 있으면서 인증되지 않은 상태라면
        // 401 에러를 일으킵니다.
        if (options.shouldBeAuthenticated && !req.isAuthenticated) {
          res.status(401).send();
          return;
        }
      }
      // 해당하는 핸들러를 실행합니다.
      handler(req, res, next);
    };

    // 라우터에 기능을 붙입니다.
    this.router.use(path, structedHandler);
  }
}
