import { Box, Button } from "@mui/material";
import type { ApiProductTileProps, Product } from "../types/product.types";

const getCardLabel = (product: Product | undefined, fallback: string) => {
  if (!product) {
    return fallback;
  }
  return `Shop ${product.category.replace(/-/g, " ")}`;
};

const actionButtonSx = {
  bgcolor: "#fff",
  color: "#111",
  borderRadius: 1,
  px: 1.35,
  py: 0.68,
  minWidth: 0,
  fontSize: { xs: 8.5, md: 9.5 },
  fontWeight: 800,
  lineHeight: 1,
  textTransform: "none",
  boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
  "&:hover": {
    bgcolor: "#fff",
    boxShadow: "0 10px 22px rgba(0,0,0,0.12)",
  },
};

function ApiProductTile({
  product,
  fallbackLabel,
  bgcolor,
  imgWidth = "82%",
  objectPosition = "center",
  loading = false,
}: ApiProductTileProps) {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: 178, sm: "auto" },
        bgcolor,
        borderRadius: 1.5,
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}>
      {product && (
        <Box
          component="img"
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          sx={{
            position: "absolute",
            inset: "7% 0 20%",
            mx: "auto",
            width: imgWidth,
            height: "76%",
            objectFit: "contain",
            objectPosition,
            filter: "drop-shadow(0 13px 13px rgba(0,0,0,0.11))",
          }}
        />
      )}
      {loading && !product && (
        <Box
          sx={{
            position: "absolute",
            width: "62%",
            height: "58%",
            top: "16%",
            borderRadius: 2,
            bgcolor: "rgba(255,255,255,0.36)",
          }}
        />
      )}
      <Button sx={{ ...actionButtonSx, position: "relative", mb: 2.45 }}>
        {getCardLabel(product, fallbackLabel)}
      </Button>
    </Box>
  );
}

export default ApiProductTile;
