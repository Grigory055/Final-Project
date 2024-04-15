import { Button, Box, TextField, Typography, Link, FormControl } from "@mui/material";
import { useState } from "react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { ILoginPassword } from "../../types/types";
import { useAppDispatch, useAppSelector  } from "../../redux/hooks";
import { fetchUserLogin } from "../../redux/thunkActions";
import { setDialog, switchDialog } from "../../redux/RPGSlice";

export function LoginForm() {
  const navigate = useNavigate();
  const isLogin = useAppSelector((store) => store.persistedReducer.isLogin);

  const [inputs, setInputs] = useState<ILoginPassword>({ login: '', password: '' })

  const dispatch = useAppDispatch();


  const inputHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputs((pre) => ({ ...pre, [e.target.name]: e.target.value }))
  }

  const submitHandler = async (e: React.FormEvent): Promise<void> => {
      e.preventDefault()
      if (inputs) {
        void dispatch(fetchUserLogin(inputs));
        setInputs({ login: '', password: '' });
      }
      // if(isLogin) {
        navigate('/');
      // }
    };
  
  const clickRegisterHandler = () => {
    dispatch(setDialog(101));
    dispatch(switchDialog(true));
  } 

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h4" id="MainMenu_gl" textAlign="center">Авторизация</Typography>
      <form onSubmit={submitHandler}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField onChange={inputHandler} value={inputs.login} name="login" label="Имя пользователя" type="text" required />
          <TextField onChange={inputHandler} value={inputs.password} name="password" label="Пароль" type="password" required />
          <Button id="btnAvtorization" variant="contained" type="submit" size="large">Войти</Button>
        </Box>
      </form>
      <Typography variant="body1" textAlign="center">Впервые здесь? <span className="link" onClick={clickRegisterHandler}>Зарегистрироваться</span></Typography>
    </Box>
  )
}
