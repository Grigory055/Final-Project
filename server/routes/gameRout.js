const gameRout = require('express').Router();
const {
  Question, Theme, Answer,
} = require('../db/models');

gameRout.get('/', async (req, res) => {
  try {
    const allQuestions = await Question.findAll({ raw: true, include: { model: Theme, attributes: ['title'] } });

    res.json(allQuestions);
  } catch (error) {
    console.log(error);
  }
});

gameRout.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const questionAndAnswers = await Question.findAll({
      where: { id },
      raw: true,
      include: Answer,
    });
    // console.log(questionAndAnswers);
    res.json(questionAndAnswers);
  } catch (error) {
    console.log(error);
  }
});

gameRout.post('/', async (req, res) => {
  try {
    const { id, userId } = req.body;
    const questionAndAnswers = await Answer.findAll({
      where: { id },
      raw: true,
    });
    console.log(userId);

    // console.log(questionAndAnswers);
    res.json(questionAndAnswers);
  } catch (error) {
    console.log(error);
  }
});

module.exports = gameRout;
