import { Button, Box, Typography } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";

export function MainMenu() {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h4" id="MainMenu_gl" textAlign="center">Главное меню</Typography>
      <Button component={ReactRouterLink} to="/newgame" variant="contained" id="MainMenu_p" type="submit" size="large">Новая Игра</Button>
      <Button component={ReactRouterLink} to="/stats"variant="contained" id="MainMenu_p" type="submit" size="large">Статистика</Button>
      <Button component={ReactRouterLink} to="/logout"variant="contained" id="MainMenu_p" type="submit" size="large">Выйти</Button>
    </Box>
  )
}
