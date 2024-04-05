import { Typography } from "@mui/material";

export function MainPage() {
  return (
    <>
  <Typography id="MainMenu_gl" variant="h1">Главная</Typography>
  <Typography  variant="h4"  className="mainInfoText">Правила игры!</Typography>
  <Typography variant="h5" className="mainInfoText">В начале игры игрок имеет 0 очков! Игрок может выбрать любую тему. Чем дороже цена вопроса, тем сложнее вопрос. 
    Отвечая на вопрос правильно игроку плюсуються баллы, но если игрок ответит не верно, баллы уменьшаться!
  </Typography>
  </>
  )
}
