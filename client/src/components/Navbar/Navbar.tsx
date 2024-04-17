import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchUserLogout } from "../../redux/thunkActions";
import { useNavigate } from "react-router-dom";


export function Navbar() {
  const isLogin = useAppSelector((store) => store.persistedReducer.isLogin);
  const login = useAppSelector((store) => store.persistedReducer.login);
  const score = useAppSelector((store) => store.persistedReducer.score);
  
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const logoutHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    if (isLogin) {
      void dispatch(fetchUserLogout());
      navigate('/');
    }
  };
  return (
    <Box id="navbar">
      <Container>
        <Box sx={{ backgroundColor: 'black', width: '370px', height: '50px', float: 'right', justifyContent: 'center', borderRadius: '20px', opacity: '0.7' }} display="flex" alignItems="center" height={80} justifyContent="flex-end">
          <Stack direction="row" spacing={2}>
            {isLogin ? (<Typography sx={{ fontSize: '19px'}} variant="body1" lineHeight={2.5}>{login}</Typography>) : (<Typography variant="body1" lineHeight={2.5}>Гость</Typography>)}
            {isLogin && ( <Typography sx={{ fontSize: '19px'}} lineHeight={2.5}>Очки: <span style={{ color: 'green' }}>{score}</span></Typography>)}
            {isLogin && ( <Link sx={{ fontSize: '19px'}} onClick={logoutHandler} lineHeight={2.5}>Выйти</Link>)}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
