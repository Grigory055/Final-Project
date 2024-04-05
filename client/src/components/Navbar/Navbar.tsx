import { Avatar, Box, Container, Link, Stack, Typography } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";


export function Navbar() {
  return (
    <Box id="navbar">
      <Container>
        <Box display="flex" alignItems="center" height={80} justifyContent="space-between">
          <Box>
            <Link component={ReactRouterLink} to="/"><img src="assets/logo.png" alt="Своя Игра" /></Link>
          </Box>
          <Stack direction="row" spacing={2}>
            <Link component={ReactRouterLink} to="/menu" lineHeight={2.5}>Главное меню</Link>
            <Link component={ReactRouterLink} to="/logout" lineHeight={2.5}>Выйти</Link>
            <Typography variant="body1" lineHeight={2.5}>johndoe</Typography>
            <Avatar alt="user" src="images/avatar.jpg" />
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
