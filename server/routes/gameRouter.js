const express = require('express');
const { Game, User } = require('../db/models');

const router = express.Router();

router.get('/stats', async (req, res) => {
  try {
    const stats = await Game.findAll({
      raw: true,
      include: [
        {
          model: User,
          attributes: ['login'],
          raw: true,
        },
      ],
    });
    console.log('stats', stats);

    res.json(stats);
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (req, res) => {
  const { id } = req.session.user;
  const score = req.body;
  try {
    const stats = await Game.create({ score, user_id: id });
    res.json(stats);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
