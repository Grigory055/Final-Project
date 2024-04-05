const router = require('express').Router();
const userRouter = require('./userRouter');

module.exports = router.use('/users', userRouter);
