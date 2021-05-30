import { UserAttr, UserInstance } from "@/type";

import { DataTypes, ModelCtor, Optional, Sequelize, Model } from "sequelize";

// interface UserCreationAttributes extends UserAttributes /{}


/*
  We have to declare the AuthorCreationAttributes to
  tell Sequelize and TypeScript that the property id,
  in this case, is optional to be passed at creation time
 */

export default function (sequelize: Sequelize): ModelCtor<UserInstance> {
  const User = sequelize.define<UserInstance>("User", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cardType: DataTypes.INTEGER,
    cardUsing: DataTypes.BOOLEAN,
    cardId: DataTypes.INTEGER,
    isAdmin: DataTypes.BOOLEAN,

  });

  return User;
}

export function associate(User: ModelCtor<UserInstance>){
  // User.hasOne(...)
}
// class Person extends Model<UserAttributes, UserCreationAttributes> {}

// class User extends Model {
//   userId: string;
//   userName: string;
//   email: string;
//   _id?: string;
//   card?: Card;
//   cardId?: number;
//   isAdmin?: boolean;
//   createdAt?: Date;
//   updatedAt?: Date;
//   deletedAt?: Date;
// }

// export default (sequelize: Sequelize): void => {
//   User.init(
//     {
//       userId: {
//         type: DataTypes.NUMBER,
//         allowNull: false,
//       },
//       userName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       _id: DataTypes.NUMBER,
//       card: Card,
//       cardId: DataTypes.NUMBER,
//       isAdmin: DataTypes.BOOLEAN,
//       createdAt: DataTypes.DATE,
//       updatedAt: DataTypes.DATE,
//       deletedAt: DataTypes.DATE,
//     },
//     { sequelize, modelName: "User" }
//   );
// };
