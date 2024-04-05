const express = require('express');
const { Game, User } = require('../db/models');

const router = express.Router();

router.get('/stats', async (req, res) => {
  // const { login } = req.session;
  // const user = await User.findOne({ where: { login } });
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
});

module.exports = router;
