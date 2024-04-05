/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Topics',
      [
        {
          title: 'Эльбрус',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Барсы',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Флаги',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Животные',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Школьная программа',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Легкие примеры',
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
