/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Cards',
      [
        {
          questions: 'Метод строки, который удаляет пробельные символы с начала и конца строки.',
          answer: 'Trim',
          value: 200,
          condition: '',
          topic_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: 'Ложное значение в JavaScript?',
          answer: 'false',
          value: 400,
          condition: '',
          topic_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: 'Объект, который используются в JavaScript при выполнении асинхронных операций?',
          answer: 'Промис',
          value: 600,
          condition: '',
          topic_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: '',
          answer: '',
          value: 800,
          condition: '',
          topic_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: '',
          answer: '',
          value: 1000,
          condition: '',
          topic_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: '',
          answer: '',
          value: 200,
          condition: '',
          topic_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: '',
          answer: '',
          value: 400,
          condition: '',
          topic_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: '',
          answer: '',
          value: 600,
          condition: '',
          topic_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: '',
          answer: '',
          value: 800,
          condition: '',
          topic_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: '',
          answer: '',
          value: 1000,
          condition: '',
          topic_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: 'Программный интерфейс к HTML-документам',
          answer: 'DOM',
          value: 200,
          condition: '',
          topic_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: 'Контейнер или область, которая обычно используется для размещения элемента или группы элементов?',
          answer: 'div',
          value: 400,
          condition: '',
          topic_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: '',
          answer: '',
          value: 600,
          condition: '',
          topic_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: '',
          answer: '',
          value: 800,
          condition: '',
          topic_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: '',
          answer: '',
          value: 1000,
          condition: '',
          topic_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: 'Набор готовых решений для часто встречающихся задач?',
          answer: 'Библиотека',
          value: 200,
          condition: '',
          topic_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: 'Обширная архитектурная структура, которая определяет организацию вашего приложения.',
          answer: 'Фреймворк',
          value: 400,
          condition: '',
          topic_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: 'Настраивает среду разработки и предоставляет базовую структуру проекта для создания приложений на React',
          answer: 'Vite',
          value: 600,
          condition: '',
          topic_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: 'Данные, которые передаются в компонент из родительского. Доступны только для чтения и не могут быть изменены',
          answer: 'Props',
          value: 800,
          condition: '',
          topic_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: 'Аббревиатура одностраничного приложения',
          answer: 'SPA',
          value: 1000,
          condition: '',
          topic_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: '',
          answer: '',
          value: 200,
          condition: '',
          topic_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: '',
          answer: '',
          value: 400,
          condition: '',
          topic_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: '',
          answer: '',
          value: 600,
          condition: '',
          topic_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: '',
          answer: '',
          value: 800,
          condition: '',
          topic_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: '',
          answer: '',
          value: 1000,
          condition: '',
          topic_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: 'Записать изменения в репозиторий? git ...',
          answer: 'commit',
          value: 200,
          condition: '',
          topic_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: 'Создание ветки? git ...',
          answer: 'branch',
          value: 400,
          condition: '',
          topic_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: 'Переход на созданную ветку? git ...',
          answer: 'checkout',
          value: 600,
          condition: '',
          topic_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: 'Создать копию репозитория, который находится по ссылке? git ... <ссылка на репозиторий>',
          answer: 'clone',
          value: 800,
          condition: '',
          topic_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: 'Перенос изменений с одной ветки на другую? git ...',
          answer: 'merge',
          value: 1000,
          condition: '',
          topic_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
