import { Inst, CardAttr } from "@/type";

import { DataTypes, ModelCtor, Sequelize } from "sequelize";

export default function (sequelize: Sequelize): ModelCtor<Inst<CardAttr>> {
  const Card = sequelize.define<Inst<CardAttr>>("Card", {
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cardId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    using: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  return Card;
}
