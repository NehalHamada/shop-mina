import { Box, Button, Grid, Typography } from "@mui/material";

const peopleCards = [
  {
    src: "/assets/per3.png",
    alt: "Person wearing green shirt",
    sx: { top: -48, left: 84, width: 116, height: 140, rotate: "-12deg" },
  },
  {
    src: "/assets/per2.png",
    alt: "Smiling person wearing a dark shirt",
    sx: { top: 52, left: 142, width: 146, height: 166, rotate: "-7deg" },
  },
  {
    src: "/assets/per1.png",
    alt: "Person wearing green hoodie",
    sx: { top: -24, right: 8, width: 118, height: 146, rotate: "-10deg" },
  },
  {
    src: "/assets/per1.png",
    alt: "Person wearing dark hoodie",
    sx: { top: 128, right: 12, width: 96, height: 128, rotate: "8deg" },
  },
  {
    src: "/assets/per3.png",
    alt: "Back view product mockup",
    sx: { bottom: -38, left: 220, width: 118, height: 158, rotate: "-8deg" },
  },
  {
    src: "/assets/per2.png",
    alt: "T-shirt product mockup",
    sx: { bottom: -20, right: -2, width: 104, height: 132, rotate: "7deg" },
  },
];

function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        width: "100dvw",
        maxWidth: "100dvw",
        boxSizing: "border-box",
        position: "relative",
        ml: "calc(50% - 50dvw)",
        mr: "calc(50% - 50dvw)",
        overflow: "hidden",
        mt: { xs: 2, md: 0 },
        px: { xs: 2, md: 3 },
      }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        sx={{
          minHeight: { md: "calc(100vh - 96px)" },
          maxHeight: { md: 760 },
        }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              height: "100%",
              minHeight: { xs: 520, sm: 560, md: 560 },
              bgcolor: "#e6f6ef",
              position: "relative",
              overflow: "hidden",
              px: { xs: 3, sm: 6, lg: 9 },
              py: { xs: 5, md: 0 },
              display: "flex",
              alignItems: "center",
            }}>
            <Box
              sx={{
                position: "absolute",
                width: { xs: 270, sm: 360, md: 430 },
                height: { xs: 270, sm: 360, md: 430 },
                borderRadius: "50%",
                top: { xs: 120, sm: 78, md: 48 },
                right: { xs: -76, sm: 20, md: 36 },
                background:
                  "linear-gradient(180deg, rgba(224,190,255,0.75) 0%, rgba(204,244,231,0.8) 70%)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                right: { xs: -18, sm: 52, md: 46 },
                bottom: { xs: 28, md: 34 },
                width: { xs: 230, sm: 280, md: 310, lg: 340 },
                height: { xs: 272, sm: 340, md: 370, lg: 400 },
                filter: "drop-shadow(0 24px 28px rgba(0,0,0,0.12))",
              }}>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: -74,
                  width: 180,
                  height: 36,
                  bgcolor: "#d8a06e",
                  borderRadius: 20,
                  transform: "rotate(9deg)",
                  transformOrigin: "left center",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 52,
                  left: "50%",
                  width: "70%",
                  height: "82%",
                  transform: "translateX(-50%)",
                  bgcolor: "#fff",
                  borderRadius: "18px 18px 34px 34px",
                  border: "1px solid rgba(0,0,0,0.06)",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: -58,
                    width: 72,
                    height: 106,
                    bgcolor: "#fff",
                    borderRadius: "24px 8px 28px 18px",
                    transform: "rotate(22deg)",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    right: -58,
                    width: 72,
                    height: 106,
                    bgcolor: "#fff",
                    borderRadius: "8px 24px 18px 28px",
                    transform: "rotate(-22deg)",
                  },
                }}>
                <Box
                  sx={{
                    width: 62,
                    height: 34,
                    mx: "auto",
                    borderBottom: "6px solid #f1f1f1",
                    borderRadius: "0 0 36px 36px",
                  }}
                />
                <Typography
                  sx={{
                    mt: { xs: 5, md: 7 },
                    textAlign: "center",
                    color: "rgba(46, 187, 119, 1)",
                    fontSize: { xs: 24, md: 31 },
                    fontWeight: 800,
                    lineHeight: 0.85,
                  }}>
                  TeeSpace
                  <br />
                  TeeSpace
                  <br />
                  <Box component="span" sx={{ opacity: 0.28 }}>
                    TeeSpace
                  </Box>
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                maxWidth: { xs: 190, sm: 240 },
                mt: { xs: -22, sm: -12, md: 0 },
              }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: 27, sm: 31, lg: 36 },
                  lineHeight: 1.18,
                  color: "#111",
                  mb: 2,
                }}>
                T-shirt printing made easy.
              </Typography>
              <Typography
                sx={{
                  color: "#777",
                  fontSize: 14,
                  lineHeight: 1.7,
                  mb: 4,
                }}>
                Create your design for your online business
              </Typography>
              <Button
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: "rgba(46, 187, 119, 1)",
                  borderRadius: 2,
                  px: { xs: 3.2, sm: 4 },
                  py: 1.2,
                  minWidth: 140,
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "rgba(41, 168, 107, 1)",
                  },
                }}>
                Create a T-shirt
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              height: "100%",
              minHeight: { xs: 520, sm: 560, md: 560 },
              bgcolor: "#f0eafb",
              position: "relative",
              overflow: "hidden",
              px: { xs: 3, sm: 6, lg: 9 },
              py: { xs: 5, md: 0 },
              display: "flex",
              alignItems: "center",
            }}>
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(110deg, transparent 0 55%, rgba(255,255,255,0.36) 55% 100%)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: { xs: 78, sm: 18, md: -4 },
                right: { xs: -118, sm: -30, md: -26 },
                width: { xs: 430, sm: 500, md: 500, lg: 560 },
                height: { xs: 470, sm: 540, md: 540, lg: 600 },
              }}>
              {peopleCards.map((card) => (
                <Box
                  key={`${card.alt}-${card.sx.top ?? card.sx.bottom}`}
                  component="img"
                  src={card.src}
                  alt={card.alt}
                  sx={{
                    position: "absolute",
                    objectFit: "cover",
                    borderRadius: 2,
                    boxShadow: "0 18px 28px rgba(0,0,0,0.18)",
                    transform: `rotate(${card.sx.rotate})`,
                    ...card.sx,
                  }}
                />
              ))}
            </Box>
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                maxWidth: { xs: 180, sm: 220 },
                mt: { xs: -24, sm: -10, md: 0 },
              }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: 27, sm: 31, lg: 36 },
                  lineHeight: 1.18,
                  color: "#111",
                  mb: 2,
                }}>
                Marina
                <br />
                Test
              </Typography>
              <Typography
                sx={{
                  color: "#777",
                  fontSize: 14,
                  lineHeight: 1.7,
                  mb: 4,
                }}>
                Print shirts for yourself or your creative works
              </Typography>
              <Button
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: "rgba(46, 187, 119, 1)",
                  borderRadius: 2,
                  px: { xs: 3.2, sm: 4 },
                  py: 1.2,
                  minWidth: 120,
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "rgba(41, 168, 107, 1)",
                  },
                }}>
                Shop Now
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeroSection;
