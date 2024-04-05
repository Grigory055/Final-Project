import { Avatar, Box, Container, Link, Stack, Typography } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchUserLogout } from "../../redux/thunkActions";


export function Navbar() {
  const isLogin = useAppSelector((store) => store.isLogin);

  const dispatch = useAppDispatch();

  const logoutHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    if (isLogin) {
      void dispatch(fetchUserLogout());
    }
  };

  return (
    <Box id="navbar">
      <Container>
        <Box display="flex" alignItems="center" height={80} justifyContent="space-between">
          <Box>
            <Link component={ReactRouterLink} to="/"><img src="assets/logo.png" alt="Своя Игра" /></Link>
          </Box>
          <Stack direction="row" spacing={2}>
            <Link component={ReactRouterLink} to="/menu" lineHeight={2.5}>Главное меню</Link>
            <Link onClick={logoutHandler} lineHeight={2.5}>Выйти</Link>
            {isLogin ? (<Typography variant="body1" lineHeight={2.5}>johndoe</Typography>) : (<Typography variant="body1" lineHeight={2.5}>Гость</Typography>)}
            <Avatar alt="user" src="images/avatar.jpg" />
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
