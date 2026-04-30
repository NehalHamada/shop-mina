import { Box, Typography } from "@mui/material";
import SectionTitle from "./SectionTitle";

const steps = [
  "Choose from 412 custom products in our catalog",
  "Customize your design with graphics, text or your own uploaded images.",
  "Order prints by selecting your preferred T-shirt size, style, and quantity.",
  "Get your order sent to your door with free standard shipping.",
];

function AppPromoSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 7 },
        textAlign: "center",
      }}>
      <SectionTitle
        title="T-shirt printing made easy."
        subtitle="Let us show you how your product come to life."
        mb={{ xs: 4, md: 5 }}
        titleSx={{ fontSize: { xs: 22, md: 25 }, fontWeight: 800 }}
        subtitleSx={{ fontSize: { xs: 11.5, md: 12 } }}
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "330px 1fr" },
          alignItems: "center",
          gap: { xs: 4, md: 7 },
          width: "min(100%, 760px)",
          mx: "auto",
          textAlign: "left",
        }}>
        <Box
          component="ol"
          sx={{
            m: 0,
            p: 0,
            listStyle: "none",
            display: "grid",
            gap: 1.05,
          }}>
          {steps.map((step, index) => (
            <Box
              component="li"
              key={step}
              sx={{
                display: "grid",
                gridTemplateColumns: "24px 1fr",
                alignItems: "start",
                gap: 1,
              }}>
              <Box
                sx={{
                  width: 19,
                  height: 19,
                  borderRadius: "50%",
                  bgcolor: index === 0 ? "#2ebb77" : "#dff5ea",
                  color: index === 0 ? "#fff" : "#2ebb77",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 10,
                  fontWeight: 800,
                  mt: 0.1,
                }}>
                {index + 1}
              </Box>
              <Typography
                sx={{
                  color: "#111",
                  fontSize: { xs: 11.5, md: 12 },
                  fontWeight: 800,
                  lineHeight: 1.35,
                  maxWidth: 276,
                  py: index === 0 ? 0.8 : 0.15,
                  px: index === 0 ? 1 : 0,
                  bgcolor: index === 0 ? "rgba(0,0,0,0.1)" : "transparent",
                  border: index === 0 ? "1px solid rgba(0,0,0,0.45)" : 0,
                }}>
                {step}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            position: "relative",
            minHeight: { xs: 250, sm: 310, md: 330 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Box
            component="img"
            src="/assets/promo.png"
            alt="T-shirt design editor preview"
            sx={{
              width: { xs: "100%", sm: 560, md: 570 },
              maxWidth: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default AppPromoSection;
