'use strict';
const { Model } = require('sequelize');
const theme = require('./theme');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Theme, Answer }) {
      this.belongsTo(Theme, { foreignKey: 'theme_id' });
      this.hasMany(Answer, { foreignKey: 'question_id' });
    }
  }
  Question.init(
    {
      body: DataTypes.STRING,
      theme_id: DataTypes.INTEGER,
      points: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
