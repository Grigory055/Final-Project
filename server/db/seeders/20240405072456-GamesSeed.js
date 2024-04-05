/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Games', [{
      score: 6000,
      user_id: 1,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Games', null, {});
  },
};
