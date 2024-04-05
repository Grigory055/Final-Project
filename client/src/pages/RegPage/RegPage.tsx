import { Grid } from "@mui/material";
import { RegForm } from "../../components";

export function RegPage() {
  return (
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6}>
          <RegForm />
        </Grid>
      </Grid>
  )
}
