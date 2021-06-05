import { CardInstance, CardRepository } from "@/type";

import { DataTypes, Sequelize } from "sequelize";

export function createRepository(sequelize: Sequelize, tableName: string): CardRepository {
  const Card = sequelize.define<CardInstance>("Card", {
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    using: {
      type: DataTypes.BOOLEAN,
    },
  }, {tableName});

  return Card;
}


