const express = require('express');
const { Game, User } = require('../db/models');

const router = express.Router();

router.get('/stats', async (req, res) => {
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

router.post('/stats', async (req, res) => {
  const { id } = req.session.user;
  const score = req.body;
  try {
    const stats = await Game.create({ score, user_id: id });
    console.log('stats', stats);

    res.json(stats);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
