import { EntityInitArgs, UserInstance } from "@/type";
import { ModelCtor } from "sequelize/types";
import { controllerInit } from "./user.controller";
import modelDefiner from "./user.model";

export default function (args: EntityInitArgs): ModelCtor<UserInstance> {
  const model = modelDefiner(args.sequelize);
  controllerInit(args.controller, model);
  return model;
}