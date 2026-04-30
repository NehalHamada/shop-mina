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
import {
  Box,
  Button,
  Chip,
  Grid,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
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
      <Box sx={{ pt: { xs: 9, md: 10 }, pb: { xs: 2, md: 2.5 } }}>
        <Button
          variant="outlined"
          component={RouterLink}
          to="/products"
          sx={{
            mb: 2,
            borderRadius: 2,
            px: 2.5,
            py: 0.75,
            textTransform: "none",
            fontWeight: 700,
          }}>
          Back to products
        </Button>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          sx={{ alignItems: "stretch", maxWidth: 920, mx: "auto" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                height: "100%",
                minHeight: { xs: 240, md: 350 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#f6f8fb",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,
                p: { xs: 2, sm: 3 },
              }}>
              <Box
                component="img"
                src={product.thumbnail}
                alt={product.title}
                sx={{
                  width: "100%",
                  maxWidth: 320,
                  maxHeight: 295,
                  objectFit: "contain",
                  filter: "drop-shadow(0 22px 28px rgba(15, 23, 42, 0.14))",
                }}
              />
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                height: "100%",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,
                p: { xs: 2, sm: 3, md: 3.5 },
              }}>
              <Stack spacing={1.75} sx={{ height: "100%" }}>
                <Chip
                  label={product.brand}
                  color="primary"
                  sx={{
                    alignSelf: "flex-start",
                    borderRadius: 2,
                    fontWeight: 700,
                    px: 0.5,
                  }}
                />
                <Box>
                  <Typography
                    variant="h3"
                    component="h1"
                    sx={{
                      fontSize: { xs: 28, md: 34 },
                      fontWeight: 800,
                      lineHeight: 1.12,
                      mb: 1.25,
                    }}>
                    {product.title}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: 16, lineHeight: 1.55 }}>
                    {product.description}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Rating value={product.rating} precision={0.5} readOnly />
                  <Typography sx={{ color: "text.secondary", fontWeight: 700 }}>
                    {product.rating.toFixed(2)}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    mt: "auto",
                    pt: 2,
                    borderTop: "1px solid",
                    borderColor: "divider",
                  }}>
                  <Typography
                    variant="overline"
                    sx={{ color: "text.secondary", fontWeight: 800 }}>
                    Price
                  </Typography>
                  <Typography
                    variant="h4"
                    color="primary"
                    sx={{ fontWeight: 900, mt: 0.5 }}>
                    {formatPrice(product.price)}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ProductsDetailsPage;
