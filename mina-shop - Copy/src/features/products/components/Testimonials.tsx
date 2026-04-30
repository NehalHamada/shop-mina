import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import SectionTitle from "./SectionTitle";

const testimonials = [
  {
    name: "Dean D.",
    role: "Director",
    text: "Great quality products - Flags, programs for exceptional capacities, birthday, and occasion welcome are largely still mainstream on paper.",
    avatar: "/assets/per3.png",
  },
  {
    name: "Cristian L.",
    role: "Manager",
    text: "Best services ever - Flags, programs for exceptional capacities, birthday, and are largely still mainstream on paper occasion welcome.",
    avatar: "/assets/per2.png",
  },
  {
    name: "Leonel R.",
    role: "Designer",
    text: "Top notch support - Flags, programs for, birthday, and occasion welcome are largely still mainstream on paper exceptional capacities.",
    avatar: "/assets/per1.png",
  },
];

function TestimonialsSection() {
  return (
    <Box
      sx={{
        py: { xs: 7, md: 8 },
        px: { xs: 2, md: 0 },
        width: "100dvw",
        maxWidth: "100dvw",
        ml: "calc(50% - 50dvw)",
        mr: "calc(50% - 50dvw)",
        boxSizing: "border-box",
        position: "relative",
        overflowX: "hidden",
        overflowY: "hidden",
        bgcolor: "#fff",
      }}>
      <Box
        sx={{
          position: "absolute",
          left: { xs: "-20%", md: "-8%" },
          right: { xs: "-20%", md: "-8%" },
          bottom: { xs: 64, md: 46 },
          height: { xs: 88, md: 108 },
          bgcolor: "rgba(46,187,119,0.08)",
          transform: "rotate(-7deg)",
          transformOrigin: "center",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          left: { xs: "-18%", md: "-5%" },
          right: { xs: "-18%", md: "-5%" },
          bottom: { xs: 38, md: 18 },
          height: { xs: 62, md: 74 },
          bgcolor: "rgba(174,96,224,0.2)",
          transform: "rotate(-7deg)",
          transformOrigin: "center",
        }}
      />

      <Box
        sx={{
          maxWidth: 1120,
          width: "100%",
          mx: "auto",
          px: { xs: 0, sm: 3, md: 7 },
          position: "relative",
          zIndex: 1,
          boxSizing: "border-box",
        }}>
        <SectionTitle
          title="What People Are Saying"
          subtitle="We provide support for more than 15K+ Businesses."
          mb={5}
          titleSx={{ fontWeight: 800 }}
          subtitleSx={{ color: "#8a8a8a" }}
        />

        <Grid
          container
          spacing={3}
          sx={{ justifyContent: "center", width: "100%", m: 0 }}>
          {testimonials.map((testimonial) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={testimonial.name}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 1.5,
                  border: "1px solid #e7e7e7",
                  boxShadow: "0 8px 26px rgba(0,0,0,0.05)",
                  bgcolor: "#fff",
                }}>
                <CardContent sx={{ p: { xs: 3, md: 3.2 } }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2.5 }}>
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{
                        width: 48,
                        height: 48,
                        mr: 2,
                        bgcolor: "#f0f0f0",
                      }}
                      slotProps={{
                        img: {
                          sx: {
                            objectFit: "cover",
                          },
                        },
                      }}
                    />
                    <Box sx={{ minWidth: 0 }}>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          color: "#111",
                          fontSize: 13,
                          lineHeight: 1.2,
                        }}>
                        {testimonial.name}
                      </Typography>
                      <Typography
                        sx={{ color: "#777", fontSize: 11, lineHeight: 1.4 }}>
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      color: "#111",
                      fontSize: 14,
                      lineHeight: 1.8,
                    }}>
                    "{testimonial.text}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            mt: 3.2,
          }}>
          <Box
            sx={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              border: "1px solid #777",
              bgcolor: "#fff",
            }}
          />
          <Box
            sx={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              bgcolor: "#111",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default TestimonialsSection;
