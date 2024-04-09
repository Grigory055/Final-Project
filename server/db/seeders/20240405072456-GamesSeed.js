/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Games",
      [
        {
          score: 6000,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          score: 500,
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          score: 300,
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Games", null, {});
  },
};
