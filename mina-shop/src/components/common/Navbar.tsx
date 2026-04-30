import { AppBar, Box, Toolbar } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
      }}>
      <Toolbar>
        <Box
          component={RouterLink}
          to="/products"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
          }}>
          <Box
            component="img"
            src="/assets/logo.png"
            alt="Mina Product"
            sx={{
              height: 44,
              width: "auto",
              display: "block",
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
