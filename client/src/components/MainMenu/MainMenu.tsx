import { Button, Box, Typography } from "@mui/material";
import { Link as ReactRouterLink,  useNavigate  } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchUserLogout } from "../../redux/thunkActions";

export function MainMenu() {
  const navigate = useNavigate();
  const isLogin = useAppSelector((store) => store.persistedReducer.isLogin);

  const dispatch = useAppDispatch();

  const logoutHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    if (isLogin) {
      void dispatch(fetchUserLogout());
      navigate('/login');
    }
  };
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h4" id="MainMenu_gl" textAlign="center">Главное меню</Typography>
      <Button component={ReactRouterLink} to="/newgame" variant="contained" id="MainMenu_p" type="submit" size="large">Новая Игра</Button>
      <Button component={ReactRouterLink} to="/stats"variant="contained" id="MainMenu_p" type="submit" size="large">Статистика</Button>
      <Button onClick={logoutHandler}  variant="contained" id="MainMenu_p" type="submit" size="large">Выйти</Button>

    </Box>
  )
}
