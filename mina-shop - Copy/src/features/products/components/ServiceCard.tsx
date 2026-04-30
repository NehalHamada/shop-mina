import { Box, Button, Grid, Typography } from "@mui/material";
import SectionTitle from "./SectionTitle";

const features = [
  {
    title: "Premium quality shirts",
    text: "Lorem ipsum dolor, adipiscing elit duis nec fringilla.",
    image: "/assets/feat1.jpg",
  },
  {
    title: "Access on any device",
    text: "Lorem ipsum dolor, adipiscing elit duis nec fringilla.",
    image: "/assets/feat2.jpg",
  },
  {
    title: "Access on any device",
    text: "Lorem ipsum dolor, adipiscing elit duis nec fringilla.",
    image: "/assets/feat3.jpg",
  },
];

const floatingIcons = [
  {
    src: "/assets/icon1.png",
    alt: "Amazon",
    sx: { left: { xs: "4%", md: "6%" }, top: { xs: 118, md: 118 } },
    size: { xs: 68, md: 82 },
    imageSize: "72%",
  },
  {
    src: "/assets/icon2.png",
    alt: "Feedly",
    sx: { left: { xs: "24%", md: "27%" }, top: { xs: 26, md: 18 } },
    size: { xs: 50, md: 58 },
    imageSize: "66%",
  },
  {
    src: "/assets/icon3.png",
    alt: "Blue partner icon",
    sx: { left: { xs: "45%", md: "47%" }, top: { xs: -2, md: -12 } },
    size: { xs: 56, md: 66 },
    imageSize: "100%",
  },
  {
    src: "/assets/icon4.png",
    alt: "Twitch",
    sx: { right: { xs: "18%", md: "19%" }, top: { xs: 58, md: 54 } },
    size: { xs: 54, md: 64 },
    imageSize: "66%",
  },
  {
    src: "/assets/icon5.png",
    alt: "Zapier",
    sx: { right: { xs: "3%", md: "2%" }, top: { xs: 132, md: 132 } },
    size: { xs: 46, md: 54 },
    imageSize: "62%",
  },
  {
    src: "/assets/icon7.png",
    alt: "Klaviyo",
    sx: { left: { xs: "16%", md: "24%" }, bottom: { xs: 26, md: 24 } },
    size: { xs: 52, md: 62 },
    imageSize: "64%",
  },
  {
    src: "/assets/icon6.png",
    alt: "Shopify",
    sx: { right: { xs: "14%", md: "16%" }, bottom: { xs: 20, md: 18 } },
    size: { xs: 58, md: 70 },
    imageSize: "66%",
  },
];

function ServiceCard() {
  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: { xs: 6, md: 8 } }}>
      <SectionTitle
        title="All the features you need"
        subtitle="You've got the ideas, we've got the tools"
        mb={{ xs: 4, md: 4.5 }}
        titleSx={{ fontSize: { xs: 26, md: 30 } }}
      />
      <Grid
        container
        spacing={{ xs: 3, md: 2.5 }}
        sx={{ mb: { xs: 6, md: 8 }, justifyContent: "center" }}>
        {features.map((feature, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={feature.title + index}>
            <Box
              sx={{
                height: "100%",
                borderRadius: 1.2,
                bgcolor: "#fff",
                overflow: "hidden",
              }}>
              <Box
                component="img"
                src={feature.image}
                alt={feature.title}
                sx={{
                  width: "100%",
                  aspectRatio: "1 / 0.86",
                  objectFit: "cover",
                  display: "block",
                  bgcolor: "#f7f7f7",
                  borderRadius: 1.2,
                  mb: 2,
                }}
              />
              <Box sx={{ px: 0.2 }}>
                <Typography sx={{ fontWeight: 900, mb: 0.7, fontSize: 14 }}>
                  {feature.title}
                </Typography>
                <Typography
                  sx={{ color: "#777", fontSize: 12, lineHeight: 1.55 }}>
                  {feature.text}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          bgcolor: "#f6f6f6",
          borderRadius: 1.5,
          overflow: "hidden",
          minHeight: { xs: 500, md: 310 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.35fr 1fr" },
          alignItems: "center",
          mb: { xs: 7, md: 9 },
        }}>
        <Box
          sx={{
            minHeight: { xs: 280, md: 310 },
            position: "relative",
            overflow: "hidden",
          }}>
          <Box
            sx={{
              position: "absolute",
              width: 230,
              height: 230,
              borderRadius: "50%",
              bgcolor: "rgba(46,187,119,0.28)",
              left: { xs: -90, md: -58 },
              bottom: { xs: -70, md: -78 },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              width: { xs: 285, md: 360 },
              height: { xs: 185, md: 224 },
              left: { xs: "50%", md: 72 },
              top: { xs: 54, md: 50 },
              transform: { xs: "translateX(-50%)", md: "none" },
              bgcolor: "#fff",
              borderRadius: "10px 10px 18px 18px",
              boxShadow: "0 24px 50px rgba(0,0,0,0.12)",
              border: "1px solid rgba(0,0,0,0.06)",
            }}>
            <Box
              component="img"
              src="/assets/feat4.png"
              alt=""
              sx={{
                width: "100%",
                aspectRatio: "1 / 0.86",
                objectFit: "cover",
                display: "block",
                bgcolor: "#f7f7f7",
                borderRadius: 1.2,
                mb: 2,
              }}
            />
          </Box>
        </Box>
        <Box sx={{ px: { xs: 3, md: 5 }, pb: { xs: 4, md: 0 } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              fontSize: { xs: 24, md: 29 },
              lineHeight: 1.14,
              mb: 1.5,
            }}>
            10,000+ of free images, icons, and graphics
          </Typography>
          <Typography sx={{ color: "#777", fontSize: 13, mb: 3 }}>
            You've got the ideas, we've got the tools
          </Typography>
          <Button
            variant="contained"
            disableElevation
            sx={{
              bgcolor: "rgba(46, 187, 119, 1)",
              borderRadius: 1.4,
              px: 3,
              py: 1,
              fontWeight: 800,
              textTransform: "none",
              "&:hover": { bgcolor: "rgba(41, 168, 107, 1)" },
            }}>
            Get Started
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          minHeight: { xs: 420, md: 330 },
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}>
        {floatingIcons.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              width: item.size,
              height: item.size,
              borderRadius: "50%",
              bgcolor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow:
                index === 0 || index === 6
                  ? "0 18px 42px rgba(0,0,0,0.14)"
                  : "0 10px 28px rgba(0,0,0,0.08)",
              ...item.sx,
            }}>
            <Box
              component="img"
              src={item.src}
              alt={item.alt}
              sx={{
                width: item.imageSize,
                height: item.imageSize,
                objectFit: "contain",
                borderRadius: item.src.includes("icon3") ? "50%" : 0,
                display: "block",
              }}
            />
          </Box>
        ))}
        <Box sx={{ textAlign: "center", maxWidth: 360, px: 2 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              fontSize: { xs: 25, md: 31 },
              lineHeight: 1.16,
              mb: 1.2,
            }}>
            Join the 7,000+ companies trusting us
          </Typography>
          <Typography sx={{ color: "#777", fontSize: 13, mb: 3 }}>
            You've got the ideas, we've got the tools
          </Typography>
          <Button
            variant="contained"
            disableElevation
            sx={{
              bgcolor: "rgba(46, 187, 119, 1)",
              borderRadius: 1.4,
              px: 3,
              py: 1,
              fontWeight: 800,
              textTransform: "none",
              "&:hover": { bgcolor: "rgba(41, 168, 107, 1)" },
            }}>
            Get Started
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ServiceCard;
