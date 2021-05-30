import { CardAttr, EntityInitArgs, Inst } from "@/type";
import { ModelCtor } from "sequelize/types";
import { controllerInit } from "./card.controller";
import modelDefiner from "./card.model";

export default function (args: EntityInitArgs): ModelCtor<Inst<CardAttr>> {
  const model = modelDefiner(args.sequelize);
  controllerInit(args.controller);
  return model;
}
