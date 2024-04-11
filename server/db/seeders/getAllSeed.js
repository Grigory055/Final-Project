'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          login: 'user1',
          email: 'user1@user.com',
          password: await bcrypt.hash('123', 10)
        },
        {
          login: 'user2',
          email: 'user2@user.com',
          password: await bcrypt.hash('123', 10)
        },
        {
          login: 'user3',
          email: 'user3@user.com',
          password: await bcrypt.hash('123', 10)
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'Themes',
      [
        {
          title: 'Флора и фауна'
        },
        {
          title: 'География'
        },
        {
          title: 'История русского государства'
        },
        {
          title: 'Спорт'
        },
        {
          title: 'Общие вопросы'
        },
        {
          title: 'Фразы из фильмов'
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          body: 'Кого называют зубастым китом?',
          theme_id: 1,
          points: 100,
        },
        {
          body: 'Куда занесены редкие виды животных и растений?',
          theme_id: 1,
          points: 200,
        },
        {
          body: 'Каким образом размножаются омары?',
          theme_id: 1,
          points: 300,
        },
        {
          body: 'Сколько лапок у краба?',
          theme_id: 1,
          points: 500,
        },



        {
          body: 'Место впадения реки?',
          theme_id: 2,
          points: 100,
        },
        {
          body: 'Морские гигантские разрушительные волны?',
          theme_id: 2,
          points: 200,
        },
        {
          body: 'Столица Италии?',
          theme_id: 2,
          points: 300,
        },
        {
          body: 'Неглубокая пещера?',
          theme_id: 2,
          points: 500,
        },



        {
          body: 'Какой город величали Господин Великий',
          theme_id: 3,
          points: 100,
        },
        {
          body: 'Первый президент России?',
          theme_id: 3,
          points: 200,
        },
        {
          body: 'Начало 2 мировой войны?',
          theme_id: 3,
          points: 300,
        },
        {
          body: 'Владимир Ильич Ленин Его настоящая фамилия?',
          theme_id: 3,
          points: 500,
        },



        {
          body: 'Положение вне игры в футболе?',
          theme_id: 4,
          points: 600,
        },
        {
          body: 'Спортсмен поднимающий одной рукой слона?',
          theme_id: 4,
          points: 900,
        },
        {
          body: 'Время одного тайма в хоккее с мячом?',
          theme_id: 4,
          points: 1200,
        },
        {
          body: 'Сколько футболистов в команде по футболу?',
          theme_id: 4,
          points: 1500,
        },



        {
          body: 'Денежная единица Австралии?',
          theme_id: 5,
          points: 100,
        },
        {
          body: 'Какой город расположен севернее: Москва, Новосибирск, Новороссийск, Киев?',
          theme_id: 5,
          points: 200,
        },
        {
          body: 'Бог морей и океанов, брат Зевса?',
          theme_id: 5,
          points: 300,
        },
        {
          body: 'Драгоценный камень голубого или зеленоватого цвета?',
          theme_id: 5,
          points: 500,
        },



        {
          body: 'Граждане! Храните деньги в сберегательной кассе!',
          theme_id: 6,
          points: 500,
        },
        {
          body: 'Смотри не перепутай! Кутузов',
          theme_id: 6,
          points: 700,
        },
        {
          body: 'Овсянка, Сэр!',
          theme_id: 6,
          points: 1000,
        },
        {
          body: 'А где командующий? -Командует',
          theme_id: 6,
          points: 1200,
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'Answers',
      [
        {
          text: 'Кашалота',
          question_id: 1,
          is_correct: true,
        },
        {
          text: 'Бегемота',
          question_id: 1,
          is_correct: false,
        },
        {
          text: 'Акулу',
          question_id: 1,
          is_correct: false,
        },
        {
          text: 'Дельфина',
          question_id: 1,
          is_correct: false,
        },



        {
          text: 'Красную книгу',
          question_id: 2,
          is_correct: true,
        },
        {
          text: 'Конституцию',
          question_id: 2,
          is_correct: false,
        },
        {
          text: 'Синюю книгу',
          question_id: 2,
          is_correct: false,
        },
        {
          text: 'Энциклопедию',
          question_id: 2,
          is_correct: false,
        },



        {
          text: 'Откладывают яйца',
          question_id: 3,
          is_correct: true,
        },
        {
          text: 'Делением',
          question_id: 3,
          is_correct: false,
        },
        {
          text: 'Метают икру',
          question_id: 3,
          is_correct: false,
        },
        {
          text: 'Пестики и тычинки',
          question_id: 3,
          is_correct: false,
        },



        {
          text: '10',
          question_id: 4,
          is_correct: true,
        },
        {
          text: '8',
          question_id: 4,
          is_correct: false,
        },
        {
          text: '12',
          question_id: 4,
          is_correct: false,
        },
        {
          text: '999',
          question_id: 4,
          is_correct: false,
        },



        {
          text: 'Устье',
          question_id: 5,
          is_correct: true,
        },
        {
          text: 'Исток',
          question_id: 5,
          is_correct: false,
        },
        {
          text: 'Коллектор',
          question_id: 5,
          is_correct: false,
        },
        {
          text: 'Водопад',
          question_id: 5,
          is_correct: false,
        },



        {
          text: 'Цунами',
          question_id: 6,
          is_correct: true,
        },
        {
          text: 'Муссоны',
          question_id: 6,
          is_correct: false,
        },
        {
          text: 'Торнадо',
          question_id: 6,
          is_correct: false,
        },
        {
          text: 'Масоны',
          question_id: 6,
          is_correct: false,
        },



        {
          text: 'Рим',
          question_id: 7,
          is_correct: true,
        },
        {
          text: 'Ирм',
          question_id: 7,
          is_correct: false,
        },
        {
          text: 'Неаполь',
          question_id: 7,
          is_correct: false,
        },
        {
          text: 'Сан-Марино',
          question_id: 7,
          is_correct: false,
        },



        {
          text: 'Грот',
          question_id: 8,
          is_correct: true,
        },
        {
          text: 'Впадина',
          question_id: 8,
          is_correct: false,
        },
        {
          text: 'Разлом',
          question_id: 8,
          is_correct: false,
        },
        {
          text: 'Майна',
          question_id: 8,
          is_correct: false,
        },



        {
          text: 'Новгород',
          question_id: 9,
          is_correct: true,
        },
        {
          text: 'Москва',
          question_id: 9,
          is_correct: false,
        },
        {
          text: 'Устюг',
          question_id: 9,
          is_correct: false,
        },
        {
          text: 'Утюг',
          question_id: 9,
          is_correct: false,
        },



        {
          text: 'Ельцин',
          question_id: 10,
          is_correct: true,
        },
        {
          text: 'Путин',
          question_id: 10,
          is_correct: false,
        },
        {
          text: 'Медведев',
          question_id: 10,
          is_correct: false,
        },
        {
          text: 'Горбачев',
          question_id: 10,
          is_correct: false,
        },



        {
          text: '2 сентября 1939',
          question_id: 11,
          is_correct: true,
        },
        {
          text: '22 июня 1941',
          question_id: 11,
          is_correct: false,
        },
        {
          text: '22 сентября 1966',
          question_id: 11,
          is_correct: false,
        },
        {
          text: '31 февраля 2035',
          question_id: 11,
          is_correct: false,
        },



        {
          text: 'Ульянов',
          question_id: 12,
          is_correct: true,
        },
        {
          text: 'Сталин',
          question_id: 12,
          is_correct: false,
        },
        {
          text: 'Иванов',
          question_id: 12,
          is_correct: false,
        },
        {
          text: 'Федоров',
          question_id: 12,
          is_correct: false,
        },



        {
          text: 'Офсайд',
          question_id: 13,
          is_correct: true,
        },
        {
          text: 'Офрот',
          question_id: 13,
          is_correct: false,
        },
        {
          text: 'Пенальти',
          question_id: 13,
          is_correct: false,
        },
        {
          text: 'Штрафной',
          question_id: 13,
          is_correct: false,
        },



        {
          text: 'Шахматист',
          question_id: 14,
          is_correct: true,
        },
        {
          text: 'Пауэрлифтер',
          question_id: 14,
          is_correct: false,
        },
        {
          text: 'Штангист',
          question_id: 14,
          is_correct: false,
        },
        {
          text: 'Гиревик',
          question_id: 14,
          is_correct: false,
        },



        {
          text: '45 мин',
          question_id: 15,
          is_correct: true,
        },
        {
          text: '40 мин',
          question_id: 15,
          is_correct: false,
        },
        {
          text: '50 мин',
          question_id: 15,
          is_correct: false,
        },
        {
          text: '30 мин',
          question_id: 15,
          is_correct: false,
        },



        {
          text: '11',
          question_id: 16,
          is_correct: true,
        },
        {
          text: '10',
          question_id: 16,
          is_correct: false,
        },
        {
          text: '12',
          question_id: 16,
          is_correct: false,
        },
        {
          text: '9',
          question_id: 16,
          is_correct: false,
        },



        {
          text: 'Австралийский доллар',
          question_id: 17,
          is_correct: true,
        },
        {
          text: 'Монгольский тугрик',
          question_id: 17,
          is_correct: false,
        },
        {
          text: 'Австрийская марка',
          question_id: 17,
          is_correct: false,
        },
        {
          text: 'Австралийский шиллинг',
          question_id: 17,
          is_correct: false,
        },



        {
          text: 'Москва',
          question_id: 18,
          is_correct: true,
        },
        {
          text: 'Новосибирск',
          question_id: 18,
          is_correct: false,
        },
        {
          text: 'Новороссийск',
          question_id: 18,
          is_correct: false,
        },
        {
          text: 'Киев',
          question_id: 18,
          is_correct: false,
        },



        {
          text: 'Посейдон',
          question_id: 19,
          is_correct: true,
        },
        {
          text: 'Ахелой',
          question_id: 19,
          is_correct: false,
        },
        {
          text: 'Геракл',
          question_id: 19,
          is_correct: false,
        },
        {
          text: 'Аквамен',
          question_id: 19,
          is_correct: false,
        },



        {
          text: 'Бирюза',
          question_id: 20,
          is_correct: true,
        },
        {
          text: 'Сапфир',
          question_id: 20,
          is_correct: false,
        },
        {
          text: 'Танзанит',
          question_id: 20,
          is_correct: false,
        },
        {
          text: 'Аквамарин',
          question_id: 20,
          is_correct: false,
        },



        {
          text: 'Иван Васильевич меняет профессию',
          question_id: 21,
          is_correct: true,
        },
        {
          text: 'Приключения Шурика',
          question_id: 21,
          is_correct: false,
        },
        {
          text: 'Москва слезам не верит',
          question_id: 21,
          is_correct: false,
        },
        {
          text: 'Бриллиантовая рука',
          question_id: 21,
          is_correct: false,
        },



        {
          text: 'Бриллиантовая рука',
          question_id: 22,
          is_correct: true,
        },
        {
          text: 'Иван Васильевич меняет профессию',
          question_id: 22,
          is_correct: false,
        },
        {
          text: 'Приключения Шурика',
          question_id: 22,
          is_correct: false,
        },
        {
          text: 'Москва слезам не верит',
          question_id: 22,
          is_correct: false,
        },



        {
          text: 'Собака Баскервилей',
          question_id: 23,
          is_correct: true,
        },
        {
          text: 'Приключения Шерлока Холмса',
          question_id: 23,
          is_correct: false,
        },
        {
          text: 'Подозрения мистера Уичера',
          question_id: 23,
          is_correct: false,
        },
        {
          text: 'Китайский квартал',
          question_id: 23,
          is_correct: false,
        },



        {
          text: 'Тот самый Мюнхгаузен',
          question_id: 24,
          is_correct: true,
        },
        {
          text: 'Ирония судьбы, или С легким паром!',
          question_id: 24,
          is_correct: false,
        },
        {
          text: 'Они сражались за Родину',
          question_id: 24,
          is_correct: false,
        },
        {
          text: 'Служили два товарища',
          question_id: 24,
          is_correct: false,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Themes', null, {});
    await queryInterface.bulkDelete('Questions', null, {});
    await queryInterface.bulkDelete('Answers', null, {});
  },
};
