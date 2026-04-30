import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Footer() {
  const informationLinks = [
    "About Us",
    "Our Blog",
    "Start a Return",
    "Contact Us",
  ];
  const usefulLinks = [
    "My Account",
    "Print Provider",
    "Become a Partner",
    "Custom Products",
  ];
  const paymentMethods = [
    { label: "AMEX", bgcolor: "#2f7df6", color: "#fff" },
    { label: "Apple Pay", bgcolor: "#fff", color: "#111" },
    { label: "G Pay", bgcolor: "#fff", color: "#111" },
    { label: "MC", bgcolor: "#fff", color: "#f05a28" },
    { label: "D Pay", bgcolor: "#635bff", color: "#fff" },
    { label: "VISA", bgcolor: "#fff", color: "#224dbb" },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#f7f7f7",
        mt: 8,
        py: { xs: 5, md: 6 },
        px: { xs: 2, md: 7 },
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}>
      <Box
        sx={{
          maxWidth: 1120,
          width: "100%",
          mx: "auto",
          boxSizing: "border-box",
        }}>
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          sx={{ justifyContent: "space-between", width: "100%", m: 0 }}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ minWidth: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                sx={{
                  width: 18,
                  height: 18,
                  mr: 0.8,
                  borderRadius: "5px 9px 5px 9px",
                  bgcolor: "#2ebb77",
                  transform: "rotate(45deg)",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 4,
                    borderRadius: "4px 7px 4px 7px",
                    bgcolor: "#79d9a7",
                  },
                }}
              />
              <Typography
                sx={{
                  fontWeight: 700,
                  color: "#111",
                  lineHeight: 1,
                }}>
                Mina Space
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "#777", mb: 1.2 }}>
              hello@minaspace.io
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#111", fontWeight: 700, mb: 1.2 }}>
              +02 036 038 3996
            </Typography>
            <Typography variant="body2" sx={{ color: "#777", maxWidth: 190 }}>
              3665 Paseo Place, Suite 0960 San Diego
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 2 }} sx={{ minWidth: 0 }}>
            <Typography sx={{ fontWeight: 700, mb: 2, color: "#111" }}>
              Information
            </Typography>
            {informationLinks.map((link) => (
              <Typography
                key={link}
                variant="body2"
                sx={{ color: "#777", mb: 1.4 }}>
                {link}
              </Typography>
            ))}
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 2 }} sx={{ minWidth: 0 }}>
            <Typography sx={{ fontWeight: 700, mb: 2, color: "#111" }}>
              Useful Links
            </Typography>
            {usefulLinks.map((link) => (
              <Typography
                key={link}
                variant="body2"
                sx={{ color: "#777", mb: 1.4 }}>
                {link}
              </Typography>
            ))}
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ minWidth: 0 }}>
            <Typography sx={{ fontWeight: 700, mb: 2, color: "#111" }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ color: "#777", mb: 2 }}>
              Get the latest news, events & more delivered to your inbox.
            </Typography>
            <TextField
              placeholder="Your email address"
              fullWidth
              size="small"
              sx={{
                bgcolor: "#fff",
                borderRadius: 2,
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  pr: 0.5,
                  "& fieldset": { border: "none" },
                },
                "& .MuiInputBase-input": {
                  py: 1.5,
                  fontSize: 13,
                },
              }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton size="small" aria-label="Subscribe">
                        <ArrowForwardIcon sx={{ fontSize: 18 }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 0.7,
            mt: 6,
            flexWrap: "wrap",
          }}>
          {paymentMethods.map((payment) => (
            <Box
              key={payment.label}
              sx={{
                minWidth: 34,
                height: 20,
                px: 0.7,
                borderRadius: 0.6,
                border: "1px solid #dedede",
                bgcolor: payment.bgcolor,
                color: payment.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 8,
                fontWeight: 800,
                lineHeight: 1,
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}>
              {payment.label}
            </Box>
          ))}
        </Box>
        <Typography
          sx={{ textAlign: "center", mt: 2.5, color: "#777" }}
          variant="body2">
          &copy; 2026 MinaSpace. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
