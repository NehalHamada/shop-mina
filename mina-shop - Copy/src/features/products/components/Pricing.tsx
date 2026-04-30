import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
} from "@mui/material";

import DoneIcon from "@mui/icons-material/Done";
import SectionTitle from "./SectionTitle";

const plans = [
  {
    title: "Personal",
    price: "$12.99",
    features: [
      "Free licensed icons",
      "Fast and free standard shipping",
      "No credit card required",
      "Friendly supports",
    ],
  },
  {
    title: "Professional",
    price: "$59.99",
    popular: true,
    features: [
      "Full access to all features",
      "Fast and free standard shipping",
      "No credit card required",
      "Use on unlimited projects",
      "Team collaboration feature",
      "Friendly supports",
    ],
  },
  {
    title: "Enterprise",
    price: "$99.99",
    features: [
      "All features in Pro Plan",
      "Use on unlimited projects",
      "Team collaboration feature",
      "Friendly supports",
    ],
  },
];

function PricingSection() {
  return (
    <Box
      sx={{
        bgcolor: "#e9e1f5",
        py: 8,
        px: { xs: 2, md: 3 },
        mt: 6,
        width: "100dvw",
        maxWidth: "100dvw",
        boxSizing: "border-box",
        position: "relative",
        ml: "calc(50% - 50dvw)",
        mr: "calc(50% - 50dvw)",
        overflow: "hidden",
      }}>
      <Box
        sx={{
          maxWidth: 1120,
          mx: "auto",
          px: { xs: 0, md: 4 },
          bgcolor: "transparent",
        }}>
        <SectionTitle
          title="Simple pricing foreveryone"
          subtitle="Choose a plan and get started"
          mb={5}
          titleSx={{ fontWeight: "bold" }}
          subtitleSx={{ color: "rgba(126, 126, 126, 1)" }}
        />
        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          {plans.map((plan, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                sx={{
                  p: 2,
                  position: "relative",
                  height: "100%",
                  borderRadius: 2,
                  boxShadow: plan.popular
                    ? "0 18px 42px rgba(0,0,0,0.16)"
                    : "0 8px 22px rgba(0,0,0,0.08)",
                  border: plan.popular
                    ? "2px solid rgba(46,187,119,0.28)"
                    : "1px solid rgba(0,0,0,0.06)",
                }}>
                {plan.popular && (
                  <Chip
                    label="Popular"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      color: "#fff",
                      bgcolor: "rgba(0, 0, 0, 1)",
                    }}
                  />
                )}
                <CardContent>
                  <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
                    {plan.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ textAlign: "center", fontWeight: "bold", my: 2 }}>
                    {plan.price}
                  </Typography>
                  <Box>
                    {plan.features.map((f, i) => (
                      <Typography key={i} variant="body2" sx={{ my: 1 }}>
                        <DoneIcon /> {f}
                      </Typography>
                    ))}
                  </Box>
                  <Button
                    fullWidth
                    sx={{
                      borderRadius: 2,
                      mt: 3,
                      backgroundColor: plan.popular
                        ? "#2EBB77"
                        : "rgba(46,187,119,0.1)",
                      color: plan.popular ? "#fff" : "rgba(0,0,0,1)",
                    }}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default PricingSection;
