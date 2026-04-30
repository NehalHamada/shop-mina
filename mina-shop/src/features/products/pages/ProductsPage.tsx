import { Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectCurrentPage,
  selectProducts,
  selectProductsError,
  selectProductsLoading,
  selectProductsTotal,
} from "../store/productsSelectors";
import { useEffect } from "react";
import { fetchProducts } from "../store/productsThunk";
import { setCurrentPage } from "../store/productsSlice";
import ErrorState from "../components/ErrorState";
import ProductGrid from "../components/ProductGrid";
import ProductPagination from "../components/ProductPagination";
import ProductSkeleton from "../components/ProductSkeleton";
import { Helmet } from "react-helmet-async";

function ProductsPage() {
  const dispatch = useAppDispatch();

  const products = useAppSelector(selectProducts);
  const loading = useAppSelector(selectProductsLoading);
  const error = useAppSelector(selectProductsError);
  const currentPage = useAppSelector(selectCurrentPage);
  const total = useAppSelector(selectProductsTotal);

  useEffect(() => {
    dispatch(fetchProducts(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <>
      <Helmet>
        <title>Products</title>
        <meta name="description" content="Browser our product collection" />
      </Helmet>
      <Box sx={{ mb: 4, mt: 12 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Products
        </Typography>
        <Typography color="text.secondary">
          Discover Our latest products
        </Typography>
      </Box>
      {loading && <ProductSkeleton />}
      {error && !loading && <ErrorState message={error} />}
      {!loading && !error && (
        <>
          <ProductGrid products={products} />
          <ProductPagination
            total={total}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
}

export default ProductsPage;
