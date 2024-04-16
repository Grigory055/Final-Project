const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Game.init({
    score: DataTypes.INTEGER,
    character: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};
