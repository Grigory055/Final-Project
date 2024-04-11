/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Topics',
      [
        {
          title: 'Java Script',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'CSS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'HTML',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'React',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Express',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'GIT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Topics', null, {});
  },
};
