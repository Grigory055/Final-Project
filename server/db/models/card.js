const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate(models) {
      this.belongsTo(models.Topic, { foreignKey: 'topic_id' });
    }
  }
  Card.init({
    questions: DataTypes.STRING,
    answer: DataTypes.STRING,
    value: DataTypes.INTEGER,
    condition: DataTypes.STRING,
    topic_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
