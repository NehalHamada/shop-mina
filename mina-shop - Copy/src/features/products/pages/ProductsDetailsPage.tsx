import { Link as RouterLink, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectProductsError,
  selectProductsLoading,
  selectSelectedProduct,
} from "../store/productsSelectors";
import { useEffect } from "react";
import { fetchProductById } from "../store/productsThunk";
import ProductSkeleton from "../components/ProductSkeleton";
import ErrorState from "../components/ErrorState";
import { Helmet } from "react-helmet-async";
import { Box, Button, Chip, Grid, Rating, Typography } from "@mui/material";
import { formatPrice } from "../../../utils/formatPrice";

function ProductsDetailsPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectSelectedProduct);
  const loading = useAppSelector(selectProductsLoading);
  const error = useAppSelector(selectProductsError);

  const productId = Number(id);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(productId));
    }
  }, [dispatch, productId]);

  if (loading) {
    return <ProductSkeleton />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  if (!product) {
    return <ErrorState message="Product not found" />;
  }

  return (
    <>
      <Helmet>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
      </Helmet>
      <Grid container spacing={4} sx={{ alignItems: "center" }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src={product.thumbnail}
            alt={product.title}
            sx={{
              width: "100%",
              maxHeight: 420,
              objectFit: "contain",
              bgcolor: "grey.100",
              borderRadius: 3,
              p: 4,
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Chip label={product.brand} color="primary" sx={{ mb: 2 }} />
          <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
            {product.title}
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            {product.description}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <Rating value={product.rating} precision={0.5} readOnly />
            <Typography>{product.rating}</Typography>
          </Box>
          <Typography
            variant="h5"
            color="primary"
            sx={{ fontWeight: "bold", mb: 3 }}>
            {formatPrice(product.price)}
          </Typography>
          <Button variant="outlined" component={RouterLink} to="/products">
            Back To Products
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ProductsDetailsPage;
