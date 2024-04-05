import { Grid, Typography } from "@mui/material";
import { LoginForm } from "../../components";

export function LoginPage() {
  return (
    <>
      <Typography variant="h2" mt={5} mb={2}>Авторизация</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <LoginForm />
        </Grid>
      </Grid>
      
    </>
  )
}
