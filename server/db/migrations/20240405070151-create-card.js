/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      questions: {
        type: Sequelize.STRING,
      },
      answer: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      value: {
        type: Sequelize.INTEGER,
      },
      topic_id: {
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        references: {
          model: {
            tableName: 'Topics',
          },
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cards');
  },
};
