import { Typography } from "@mui/material";
import { Game } from "../../components";

export function GamePage() {
  return (
    <>
      <Typography variant="h2" mt={5} mb={2}>Cвоя игра</Typography>
      <Game />
    </>
  )
}
