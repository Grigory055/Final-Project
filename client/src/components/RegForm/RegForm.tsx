import { Button, Box, TextField, Typography, Link } from "@mui/material";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { ILoginEmailPassword } from "../../types/types";
import { useAppDispatch } from "../../redux/hooks";
import { fetchUserRegister } from "../../redux/thunkActions";
import { useState } from "react";
import { setDialog, switchDialog } from "../../redux/RPGSlice";

export function RegForm() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<ILoginEmailPassword>({ login: '', email: '', password: '' })

  const dispatch = useAppDispatch();

  const inputHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputs((pre) => ({ ...pre, [e.target.name]: e.target.value }))
  }

  const submitHandler = async (e: React.FormEvent): Promise<void> => {
      e.preventDefault()
      if (inputs) {
        void dispatch(fetchUserRegister(inputs));
        setInputs({ login: '', email: '', password: '' });
      }
      navigate('/');
    };
  
  const clickLoginHandler = () => {
    dispatch(setDialog(100));
    dispatch(switchDialog(true));
  } 
  
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h4" id="MainMenu_gl" textAlign="center">Регистрация</Typography>
      <form onSubmit={submitHandler}>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField onChange={inputHandler} value={inputs.login}  name="login" label="Имя пользователя" type="text" required />
        <TextField onChange={inputHandler} value={inputs.email}  name="email" label="Электронная почта" type="email" required />
        <TextField onChange={inputHandler} value={inputs.password}  name="password" label="Пароль" type="password" required />
        <Button variant="contained" type="submit" id="btnAvtorization" size="large">Зарегистрироваться</Button>
      </Box>
      </form>
      <Typography variant="body1" textAlign="center">Уже есть аккаунт? <span className="link" onClick={clickLoginHandler}>Войти</span></Typography>
    </Box>
  )
}
