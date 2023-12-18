"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Package extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Package.belongsTo(models.Channel, {
        foreignKey: "channelId",
        onDelete: "SET NULL",
      });
    }
  }
  Package.init(
    {
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      duration: DataTypes.DATE,
      price: DataTypes.INTEGER,
      channelId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Package",
    }
  );
  return Package;
};