const router = require('express').Router();
const userRouter = require('./userRouter');
const gameRouter = require('./gameRouter');
const topicRouter = require('./topicRouter');

module.exports = router.use('/users', userRouter);
module.exports = router.use('/games', gameRouter);
module.exports = router.use('/topics', topicRouter);
