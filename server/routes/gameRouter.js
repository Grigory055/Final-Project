const express = require('express');
const { Game, User } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  // const { login } = req.session.user;
  // const user = await User.findOne({ where: { login } });

  console.log('попали', req.session.user);
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

router.put('/', async (req, res) => {
  const id = req.session.userId;
  const { score } = req.body;
  console.log(id, score)
  try {
    const stats = await Game.findOne({ where: { user_id: id } });
    stats.score = score;
    stats.save();
    console.log('stats', stats)
    res.json(stats);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
