import { Grid } from "@mui/material";
import { LoginForm } from "../../components";

export function LoginPage() {
  return (
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6}>
          <LoginForm />
        </Grid>
      </Grid>
  )
}
