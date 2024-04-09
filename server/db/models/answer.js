'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate({ Question }) {
      this.belongsTo(Question, { foreignKey: 'question_id' });
    }
  }
  Answer.init(
    {
      text: DataTypes.STRING,
      question_id: DataTypes.INTEGER,
      is_correct: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Answer',
    }
  );
  return Answer;
};
