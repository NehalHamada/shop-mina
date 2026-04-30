import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

type ResponsiveSpacing = number | { xs?: number; sm?: number; md?: number; lg?: number };

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  mb?: ResponsiveSpacing;
  titleSx?: SxProps<Theme>;
  subtitleSx?: SxProps<Theme>;
};

function SectionTitle({
  title,
  subtitle,
  align = "center",
  mb = { xs: 4, md: 5 },
  titleSx,
  subtitleSx,
}: SectionTitleProps) {
  return (
    <Box sx={{ textAlign: align, mb }}>
      <Typography
        component="h2"
        sx={[
          {
            color: "#111",
            fontSize: { xs: 24, md: 30 },
            fontWeight: 900,
            lineHeight: 1.2,
            letterSpacing: 0,
            mb: subtitle ? 0.9 : 0,
          },
          ...(Array.isArray(titleSx) ? titleSx : [titleSx]),
        ]}>
        {title}
      </Typography>
      {subtitle && (
        <Typography
          sx={[
            {
              color: "#777",
              fontSize: { xs: 12, md: 13 },
              lineHeight: 1.6,
            },
            ...(Array.isArray(subtitleSx) ? subtitleSx : [subtitleSx]),
          ]}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

export default SectionTitle;
