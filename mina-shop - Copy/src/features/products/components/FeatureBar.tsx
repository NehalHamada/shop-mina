import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import { Box, Container, Typography } from "@mui/material";

const features = [
  {
    icon: CheckroomOutlinedIcon,
    title: "Top quality",
    desc: "Lorem ipsum detos, consectetuer adipiscing elit lacus nec magna",
  },
  {
    icon: AutoAwesomeMosaicOutlinedIcon,
    title: "Mix and match",
    desc: "Lorem ipsum detos, adipiscing elit tellus nec viverra morbi",
  },
  {
    icon: Inventory2OutlinedIcon,
    title: "Shipping worldwide",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
  },
];

function FeatureBar() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        bgcolor: "#fff",
        py: { xs: 3.5, md: 5 },
      }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            columnGap: { sm: 4, md: 8, lg: 11 },
            rowGap: 3,
            alignItems: "center",
          }}>
          {features.map((item) => (
            <Box
              key={item.title}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: { xs: 1.75, md: 2 },
                maxWidth: { xs: 360, sm: "none" },
                mx: { xs: "auto", sm: 0 },
              }}>
              <item.icon
                sx={{
                  color: "#2ebb77",
                  fontSize: { xs: 28, md: 31 },
                  mt: 0.15,
                  flexShrink: 0,
                  strokeWidth: 1,
                }}
              />
              <Box>
                <Typography
                  component="h3"
                  sx={{
                    color: "#111",
                    fontSize: { xs: 13, md: 14 },
                    fontWeight: 800,
                    lineHeight: 1.25,
                    mb: 0.55,
                  }}>
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#858585",
                    fontSize: { xs: 11.5, md: 12 },
                    lineHeight: 1.55,
                    maxWidth: 230,
                  }}>
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default FeatureBar;
