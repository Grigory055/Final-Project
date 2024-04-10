import { Grid } from "@mui/material";
import { LoginForm, Navbar } from "../../components";
import { Container } from "react-bootstrap";

export function LoginPage() {
  return (
    <>
      <Navbar />
      <Container id="main">
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6}>
            <LoginForm />
          </Grid>
        </Grid>
      </Container>
    </>
      
  )
}
