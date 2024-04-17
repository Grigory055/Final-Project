import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchUserLogout, fetchUserScore } from "../../redux/thunkActions";
import { useNavigate } from "react-router-dom";


export function Navbar() {
  const { isLogin, login, score, level } = useAppSelector((store) => store.persistedReducer);
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
      <div className="navbar-left"></div>
      <div className="navbar-center">
        {isLogin ? (<Typography sx={{ fontSize: '19px'}} variant="body1" lineHeight={2.5}>{login}</Typography>) : (<Typography variant="body1" lineHeight={2.5}>Гость</Typography>)}
        {isLogin && (
          <>
            <Typography sx={{ fontSize: '19px'}} lineHeight={2.5}>Очки: <span className="navbar-stats">{score}</span></Typography>
            <Typography sx={{ fontSize: '19px'}} lineHeight={2.5}>Уровень: <span className="navbar-stats">{level}</span></Typography>
            <Link className="logout" sx={{ fontSize: '19px'}} onClick={logoutHandler} lineHeight={2.5}>Выйти</Link>
          </>
          )}
      </div>
      <div className="navbar-right"></div>
    </Box>
  )
}
