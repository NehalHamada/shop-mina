import { useNavigate } from "react-router-dom";
import type { Product } from "../types/product.types";
import { Box, Chip, Typography } from "@mui/material";

type ProductCardProps = {
  product: Product;
};

const formatCardPrice = (price: number) => `$${price.toFixed(2)}`;

function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const originalPrice =
    product.discountPercentage > 0
      ? product.price / (1 - product.discountPercentage / 100)
      : product.price;

  const badges = [
    product.discountPercentage > 0
      ? { label: "Sale", color: "#28c978", textColor: "#fff" }
      : null,
    product.availabilityStatus?.toLowerCase().includes("low")
      ? { label: "Low", color: "#b469ff", textColor: "#fff" }
      : null,
    product.rating >= 4.75
      ? { label: "Hot", color: "#ff8a3d", textColor: "#fff" }
      : null,
  ].filter(Boolean) as { label: string; color: string; textColor: string }[];

  return (
    <Box
      component="article"
      onClick={() => navigate(`/products/${product.id}`)}
      sx={{
        height: "100%",
        cursor: "pointer",
        textAlign: "center",
        outline: "none",
        "&:hover img": {
          transform: "scale(1.04)",
        },
      }}>
      <Box
        sx={{
          position: "relative",
          bgcolor: "#f2f2f2",
          borderRadius: 1.5,
          aspectRatio: "1 / 1.36",
          overflow: "hidden",
          mb: 1.35,
        }}>
        <Box
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 0.45,
          }}>
          {badges.slice(0, 2).map((badge) => (
            <Chip
              key={badge.label}
              label={badge.label}
              size="small"
              sx={{
                height: 17,
                borderRadius: 0.5,
                bgcolor: badge.color,
                color: badge.textColor,
                fontSize: 8.5,
                fontWeight: 800,
                "& .MuiChip-label": {
                  px: 0.55,
                },
              }}
            />
          ))}
        </Box>
        <Box
          component="img"
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            p: { xs: 2, sm: 2.2 },
            transition: "transform 180ms ease",
          }}
        />
      </Box>
      <Typography
        component="h3"
        title={product.title}
        sx={{
          color: "#111",
          fontSize: { xs: 12.5, md: 13 },
          fontWeight: 800,
          lineHeight: 1.25,
          mb: 0.45,
          px: 0.5,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}>
          {product.title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
          gap: 0.65,
          minHeight: 18,
        }}>
        <Typography
          component="span"
          sx={{
            color: "#2ebb77",
            fontSize: 12,
            fontWeight: 800,
            lineHeight: 1,
          }}>
          {formatCardPrice(product.price)}
        </Typography>
        {product.discountPercentage > 0 && (
          <Typography
            component="span"
            sx={{
              color: "#9c9c9c",
              fontSize: 11,
              fontWeight: 700,
              lineHeight: 1,
              textDecoration: "line-through",
            }}>
            {formatCardPrice(originalPrice)}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default ProductCard;
