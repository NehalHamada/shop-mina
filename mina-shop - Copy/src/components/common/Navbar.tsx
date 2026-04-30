import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const navLinks = ["Home", "MinaSpace", "Shop", "Blog", "Contact"];

function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: 0,
        bgcolor: "#fff",
        color: "#111",
        borderBottom: "1px solid #eeeeee",
        zIndex: 1200,
      }}>
      <Box
        sx={{
          bgcolor: "#f6f6f6",
          minHeight: 28,
          px: { xs: 2, md: 7 },
          py: { xs: 2, md: 3 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr auto 1fr" },
          alignItems: "center",
          gap: 2,
        }}>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 1.4,
            color: "#9a9a9a",
          }}>
          <TwitterIcon sx={{ fontSize: 15 }} />
          <FacebookIcon sx={{ fontSize: 15 }} />
          <InstagramIcon sx={{ fontSize: 15 }} />
          <YouTubeIcon sx={{ fontSize: 16 }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.4,
            minWidth: 0,
          }}>
          <LocalFireDepartmentIcon sx={{ color: "#ff8a00", fontSize: 16 }} />
          <Typography
            sx={{
              fontSize: { xs: 11, md: 13 },
              fontWeight: 800,
              textAlign: "center",
              whiteSpace: "nowrap",
            }}>
            Free shipping on all U.S. orders $50+
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 1,
          }}>
          <Button
            size="small"
            sx={{
              color: "#111",
              fontSize: 12,
              fontWeight: 800,
              minWidth: "auto",
              textTransform: "none",
            }}>
            Login
          </Button>
          <Button
            size="small"
            variant="contained"
            disableElevation
            sx={{
              bgcolor: "#111",
              borderRadius: 1,
              color: "#fff",
              fontSize: 12,
              fontWeight: 800,
              px: 1.8,
              py: 0.35,
              textTransform: "none",
              "&:hover": { bgcolor: "#111" },
            }}>
            Sign Up
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          minHeight: { xs: 86, md: 68 },
          px: { xs: 2, md: 7 },
          py: { xs: 1.4, md: 0 },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr auto",
            md: "1fr auto 1fr",
          },
          alignItems: "center",
          columnGap: { xs: 1.5, md: 3 },
          rowGap: 1.2,
        }}>
        <Box
          component="nav"
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 2.6,
          }}>
          {navLinks.map((link, index) => (
            <Box
              key={link}
              sx={{
                display: "flex",
                alignItems: "center",
                color: index === 0 ? "#2ebb77" : "#111",
              }}>
              <Typography sx={{ fontSize: 12, fontWeight: 800 }}>
                {link.toUpperCase()}
              </Typography>
              <KeyboardArrowDownIcon sx={{ fontSize: 14, ml: 0.2 }} />
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "flex-start", md: "center" },
            minWidth: 0,
          }}>
          <Box
            component="img"
            src="/assets/logo.png"
            alt="Mina Space"
            sx={{
              width: { xs: 150, sm: 180, md: 210 },
              maxWidth: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: { xs: 0.6, md: 1.8 },
            minWidth: 0,
          }}>
          <Box
            sx={{
              width: { xs: "100%", md: 250 },
              maxWidth: { xs: 210, md: 250 },
              height: 38,
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              px: 1.4,
              border: "1px solid #e2e2e2",
              borderRadius: 1.4,
              bgcolor: "#fff",
            }}>
            <SearchIcon sx={{ fontSize: 18, color: "#777", mr: 1 }} />
            <Box
              component="input"
              placeholder="Search..."
              sx={{
                border: 0,
                outline: 0,
                width: "100%",
                minWidth: 0,
                color: "#555",
                font: "inherit",
                fontSize: 12,
                bgcolor: "transparent",
              }}
            />
          </Box>

          <IconButton size="small" aria-label="Cart">
            <Badge
              badgeContent={0}
              sx={{
                "& .MuiBadge-badge": {
                  bgcolor: "#2ebb77",
                  color: "#fff",
                  fontSize: 9,
                  minWidth: 15,
                  height: 15,
                },
              }}>
              <ShoppingCartOutlinedIcon sx={{ color: "#111", fontSize: 22 }} />
            </Badge>
          </IconButton>
          <IconButton size="small" aria-label="Shopping bag">
            <Badge
              badgeContent={0}
              sx={{
                "& .MuiBadge-badge": {
                  bgcolor: "#2ebb77",
                  color: "#fff",
                  fontSize: 9,
                  minWidth: 15,
                  height: 15,
                },
              }}>
              <ShoppingBagOutlinedIcon sx={{ color: "#111", fontSize: 22 }} />
            </Badge>
          </IconButton>
        </Box>

        <Box
          sx={{
            gridColumn: "1 / -1",
            display: { xs: "flex", sm: "none" },
            alignItems: "center",
            height: 38,
            px: 1.4,
            border: "1px solid #e2e2e2",
            borderRadius: 1.4,
            bgcolor: "#fff",
          }}>
          <SearchIcon sx={{ fontSize: 18, color: "#777", mr: 1 }} />
          <Box
            component="input"
            placeholder="Search..."
            sx={{
              border: 0,
              outline: 0,
              width: "100%",
              minWidth: 0,
              color: "#555",
              font: "inherit",
              fontSize: 12,
              bgcolor: "transparent",
            }}
          />
        </Box>
      </Box>
    </AppBar>
  );
}

export default Navbar;
