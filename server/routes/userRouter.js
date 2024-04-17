const userRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Game } = require('../db/models');
const isUser = require('../middlewares/isUser');

userRouter.post('/registration', async (req, res) => {
  const { login, password, email, character } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    if (user) {
      res.json({ err: 'Пользователь зарегистрирован' });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ login, email, password: hash });
      const game = await Game.create({ score: 0, character, user_id: newUser.id });
      const clearedUser = {
        id: newUser.id,
        login: newUser.login,
        email: newUser.email,
      };

      req.session.newUser = clearedUser;

      res.json(clearedUser);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

userRouter.post('/login', async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    if (!user) {
      res.sendStatus(400);
    } else {
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        res.status(400).json({ message: 'Неверный пароль' });
      }
      if (passwordCompare) {
        const game = await Game.findOne({ where: { user_id: user.id } });
        const clearedUser = {
          id: user.id,
          login: user.login,
          email: user.email,
        };
        req.session.user = clearedUser;
        res.json({
          ...clearedUser,
          score: game.score,
          character: game.character,
        });
      } else {
        res.sendStatus(400);
      }
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

userRouter.get('/logout', isUser, async (req, res) => {
  try {
    req.session.destroy(() => {
      res.clearCookie('reactCookies');
      res.sendStatus(200);
    });
  } catch (error) {
    console.log('Ошибка: ', error);
  }
});

module.exports = userRouter;
