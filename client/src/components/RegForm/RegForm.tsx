import { Button, Box, TextField, Typography, Link } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";

export function RegForm() {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h4" textAlign="center">Регистрация</Typography>
      <TextField name="username" label="Имя пользователя" type="text" required />
      <TextField name="email" label="Электронная почта" type="email" required />
      <TextField name="password" label="Пароль" type="password" required />
      <Button variant="contained" type="submit" size="large">Зарегистрироваться</Button>
      <Typography variant="body1" textAlign="center">Уже есть аккаунт? <Link component={ReactRouterLink} to="/login">Войти</Link></Typography>
    </Box>
  )
}
