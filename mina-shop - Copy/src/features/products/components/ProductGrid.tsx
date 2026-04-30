import { Grid } from "@mui/material";
import type { Product } from "../types/product.types";
import ProductCard from "./ProductCard";

type ProductGridProps = {
  products: Product[];
};

function ProductGrid({ products }: ProductGridProps) {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid size={{ xs: 12, md: 4, lg: 3 }} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductGrid;
