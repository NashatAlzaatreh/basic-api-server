"use strict";

// Our table schema
const Clothes = (sequelize, DataTypes) =>
  sequelize.define("clothes", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.INTEGER,
    },

    season: {
      type: DataTypes.STRING,
    },
  });

module.exports = Clothes;
