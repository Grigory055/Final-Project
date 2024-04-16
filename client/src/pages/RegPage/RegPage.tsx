import { Grid } from "@mui/material";
import { Navbar, RegForm } from "../../components";
import { Container } from "react-bootstrap";

export function RegPage() {

  

  return (
    <>
      <Navbar />
      <Container id="main">
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6}>
            <RegForm />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
