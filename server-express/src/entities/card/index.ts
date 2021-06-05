// import { CardAttr, CardRepository, EntityInitArgs, Inst } from "@/type";
// import { ModelCtor } from "sequelize/types";
// import { controllerInit } from "./card.controller";
// import modelDefiner from "./card.repository";

// export default function (args: EntityInitArgs): CardRepository {
//   const model = modelDefiner(args.sequelize);
//   controllerInit(args.controller);
//   return model;
// }

export { createRepository } from "./card.repository";
export { initController } from "./card.controller";
export { CardService } from "./card.service";