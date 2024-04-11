const gameRouter = require('express').Router();

const gameRout = require('./gameRout');

gameRouter.use('/', gameRout);

module.exports = gameRouter;
