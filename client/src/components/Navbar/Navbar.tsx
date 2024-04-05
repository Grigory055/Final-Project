import { Box, Link } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";


export function Navbar() {
  return (
    <Box display="flex" alignItems="center" gap={2} height={50}>
      <Link component={ReactRouterLink} to="/">Главная</Link>
      <Link component={ReactRouterLink} to="/info">Инфо</Link>
      <Link component={ReactRouterLink} to="/login">Войти</Link>
    </Box>
      
    
  )
}
