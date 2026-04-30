import { Container } from "@mui/material";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 7 } }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
