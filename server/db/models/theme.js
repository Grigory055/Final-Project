'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Question }) {
      this.hasMany(Question, { foreignKey: 'theme_id' });
    }
  }
  Theme.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Theme',
    }
  );
  return Theme;
};
