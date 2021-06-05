import type { EntityInitArgs, UserRepository } from "@/type";

export { createRepository, associate } from "./user.repository";
export { initController } from "./user.controller";
export { UserService } from "./user.service";

// export  from "./user.repository"

// export default function (
//   args: EntityInitArgs,
//   tableName: string
// ): UserRepository {
//   const model = modelDefiner(args.sequelize, tableName);
//   controllerInit(args.controller, model);
//   return model;
// }
