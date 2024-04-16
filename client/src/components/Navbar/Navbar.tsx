import { Avatar, Box, Container, Link, Stack, Typography } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchUserLogout } from "../../redux/thunkActions";


export function Navbar() {
  const isLogin = useAppSelector((store) => store.persistedReducer.isLogin);
  const login = useAppSelector((store) => store.persistedReducer.login);

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
        <Box display="flex" alignItems="center" height={80} justifyContent="flex-end">
          <Stack direction="row" spacing={2}>
            {isLogin && ( <Link onClick={logoutHandler} lineHeight={2.5}>Выйти</Link>)}
            {isLogin ? (<Typography variant="body1" lineHeight={2.5}>{login}</Typography>) : (<Typography variant="body1" lineHeight={2.5}>Гость</Typography>)}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
