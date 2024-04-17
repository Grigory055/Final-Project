/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Games',
      [
        {
          score: 6000,
          character: 'male',
          level: 0,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          score: 500,
          user_id: 2,
          level: 1,
          character: 'female',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Games', null, {});
  },
};
