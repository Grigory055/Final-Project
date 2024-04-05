import { Button, Box, TextField, Typography, Link } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";

export function LoginForm() {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h4" textAlign="center">Авторизация</Typography>
      <TextField name="username" label="Имя пользователя" type="text" required />
      <TextField name="password" label="Пароль" type="password" required />
      <Button variant="contained" type="submit" size="large">Войти</Button>
      <Typography variant="body1" textAlign="center">Впервые здесь? <Link component={ReactRouterLink} to="/register">Зарегистрироваться</Link></Typography>
    </Box>
  )
}
