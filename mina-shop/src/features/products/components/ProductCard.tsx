import { useNavigate } from "react-router-dom";
import type { Product } from "../types/product.types";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { formatPrice } from "../../../utils/formatPrice";

type ProductCardProps = {
  product: Product;
};
function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();

  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        component="img"
        height="180"
        image={product.thumbnail}
        alt={product.title}
        sx={{ objectFit: "contain", p: 2 }}
      />
      <CardContent>
        <Typography variant="h6" noWrap>
          {product.title}
        </Typography>
        <Typography sx={{ color: "primary", fontWeight: "bold", my: 1 }}>
          {formatPrice(product.price)}
        </Typography>
        <Button
          fullWidth
          variant="contained"
          onClick={() => navigate(`/products/${product.id}`)}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
