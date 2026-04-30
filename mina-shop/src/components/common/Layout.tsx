import { Container } from "@mui/material";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ px: 7 }}>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
