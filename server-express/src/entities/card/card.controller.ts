import { GAEPO, SEOCHO } from "@/const";
import { Controller } from "@/controller";
import { aw } from "@/util";
import { CardService } from "./card.service";

export const initController = (
  controller: Controller,
  cardService: CardService
): void => {
  controller.post(
    "/api/card/create/:type",
    aw(async (req, res, next) => {
      if (typeof req.params.type !== "string") {
        res.status(403).send("type not provided");
        return;
      }
      const type = parseInt(req.params.type, 10);
      if (type !== GAEPO && type !== SEOCHO) {
        res.status(403).send("wrong type");
        return;
      }
      const { start, end } = req.query;
      if (typeof start !== "string" || typeof end !== "string") {
        res.status(403).send("start or end query not provided");
        return;
      }
      const startNum = parseInt(start, 10);
      const endNum = parseInt(end, 10);
      if (isNaN(startNum) || isNaN(endNum)) {
        res.status(403).send("wrong start or end");
        return;
      }
      
      await cardService.create(type, startNum, endNum);
    }),
    { shouldBeAdmin: true }
  );
  controller.get(
    "/api/card/valid/:id",
    aw(async (req, res, next) => {
      const idNum = parseInt(req.params.id, 10);
      if (isNaN(idNum)) {
        res.status(403).send("invalid card id");
        return ;
      }
      
      const back = await cardService.valid(idNum);
      res.json(back);
    })
  );

  // id: 카드번호
  controller.post(
    "/api/card/release/:id",
    aw(async (req, res, next) => {
      // todo
      // JWT 토큰을 분석합니다.
      // 어드민인지 확인합니다. → 아니면 exception 반환
      // 카드의 사용 상태를 false로 변경합니다.
    })
  );
  
};
