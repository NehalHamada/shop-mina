import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectCurrentPage,
  selectProducts,
  selectProductsError,
  selectProductsLoading,
} from "../store/productsSelectors";
import { useEffect } from "react";
import { fetchProducts } from "../store/productsThunk";
import ErrorState from "../components/ErrorState";
import ProductGrid from "../components/ProductGrid";
import ProductSkeleton from "../components/ProductSkeleton";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import FeatureBar from "../components/FeatureBar";
import CategoryShowCase from "../components/CategoryShowCase";
import SectionTitle from "../components/SectionTitle";
import AppPromoSection from "../components/AppPromoSection";
import ServiceCard from "../components/ServiceCard";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import { Box } from "@mui/material";

const fullBleedSectionSx = {
  width: "100dvw",
  maxWidth: "100dvw",
  boxSizing: "border-box",
  ml: "calc(50% - 50dvw)",
  mr: "calc(50% - 50dvw)",
  overflowX: "hidden",
};

const sectionInnerSx = {
  maxWidth: 1120,
  width: "100%",
  mx: "auto",
  px: { xs: 2, sm: 3, md: 7 },
  boxSizing: "border-box",
};

function ProductsPage() {
  const dispatch = useAppDispatch();

  const products = useAppSelector(selectProducts);
  const loading = useAppSelector(selectProductsLoading);
  const error = useAppSelector(selectProductsError);
  const currentPage = useAppSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchProducts(currentPage));
  }, [dispatch, currentPage]);

  return (
    <Box>
      <Helmet>
        <title>Products</title>
        <meta name="description" content="Browser our product collection" />
      </Helmet>
      <Hero />
      <Box component="section" sx={fullBleedSectionSx}>
        <Box sx={sectionInnerSx}>
          <FeatureBar />
        </Box>
      </Box>

      <Box component="section" sx={fullBleedSectionSx}>
        <Box sx={sectionInnerSx}>
          <CategoryShowCase />
        </Box>
      </Box>

      <Box component="section" sx={fullBleedSectionSx}>
        <Box sx={sectionInnerSx}>
          <SectionTitle
            title="Featured products"
            subtitle="What's more, we do it right!"
          />
        </Box>
      </Box>
      <Box
        component="section"
        sx={{ ...fullBleedSectionSx, py: { xs: 5, md: 7 } }}>
        <Box sx={sectionInnerSx}>
          {loading && <ProductSkeleton />}
          {error && !loading && <ErrorState message={error} />}
          {!loading && !error && (
            <>
              <ProductGrid products={products} />
            </>
          )}
        </Box>
      </Box>

      <Box component="section" sx={fullBleedSectionSx}>
        <Box sx={sectionInnerSx}>
          <AppPromoSection />
        </Box>
      </Box>

      <Box component="section" sx={fullBleedSectionSx}>
        <Box sx={sectionInnerSx}>
          <ServiceCard />
        </Box>
      </Box>
      <Pricing />
      <Testimonials />
    </Box>
  );
}

export default ProductsPage;
