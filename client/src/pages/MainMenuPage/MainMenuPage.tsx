import { Grid } from "@mui/material";
import { MainMenu } from "../../components";

export function MainMenuPage() {
  return (
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6}>
          <MainMenu />
        </Grid>
      </Grid>
  )
}
