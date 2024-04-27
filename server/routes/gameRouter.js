const express = require('express');
const { Game, User } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
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
    res.json(stats);
  } catch (error) {
    console.log(error);
  }
});

router.put('/', async (req, res) => {
  if (req.session.user) {
    const { id } = req.session.user;
    const { score, level } = req.body;
    try {
      const stats = await Game.findOne({ where: { user_id: id } });
      if (level > stats.level) stats.level = level;
      stats.score = score;
      stats.save();
      res.json(stats);
    } catch (error) {
      console.log(error);
    }
  }
});

module.exports = router;
