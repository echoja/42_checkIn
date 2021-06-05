import { CardRepository, UserInstance, UserRepository } from "@/type";

import { DataTypes, Sequelize } from "sequelize";

// interface UserCreationAttributes extends UserAttributes /{}

export function createRepository(
  sequelize: Sequelize,
  tableName = "Users"
): UserRepository {
  const User = sequelize.define<UserInstance>(
    "User",
    {
      _id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      email: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      cardId: DataTypes.INTEGER,
      isAdmin: DataTypes.BOOLEAN,
    },
    {
      tableName,
    }
  );
  return User;
}

export function associate(user: UserRepository, card: CardRepository, constraintName?: string): void {
  user.belongsTo(card, {
    as: 'card', // 나중에 sequelize include 할 때 포함되는 필드 이름
    foreignKey: "cardId",
  });
  // card.belongsTo(user, {as: 'user'});
}
