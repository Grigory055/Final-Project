const express = require('express');
const { Topic, Card } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const topics = await Topic.findAll({
      raw: true,
      include: [
        {
          model: Card,
          attributes: ['questions', 'answer', 'value', 'image'],
          raw: true,
        },
      ],
    });
    console.log(topics);
    res.json(topics);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
