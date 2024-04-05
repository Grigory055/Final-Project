import { Button, Box, TextField } from "@mui/material";

export function LoginForm() {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <TextField name="username" label="Имя пользователя" type="text" required />
      <TextField name="password" label="Пароль" type="password" required />
      <Button variant="contained" type="submit" size="large">Войти</Button>
    </Box>
  )
}
