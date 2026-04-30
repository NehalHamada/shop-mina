import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import {
  selectProducts,
  selectProductsLoading,
} from "../store/productsSelectors";
import { productsApi } from "../api/productsApi";
import type { Product } from "../types/product.types";
import ApiProductTile from "./ApiProductTitleProps";

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

const apparelCategories = ["mens-shirts", "tops", "womens-dresses"];

function CategoryShowCase() {
  const products = useAppSelector(selectProducts);
  const loading = useAppSelector(selectProductsLoading);
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
  const fallbackProducts = products.slice(0, 5);
  const showcaseProducts =
    categoryProducts.length >= 5 ? categoryProducts : fallbackProducts;
  const mainProduct = showcaseProducts[2] ?? showcaseProducts[0];

  useEffect(() => {
    let ignore = false;
    const loadCategoryProducts = async () => {
      try {
        const responses = await Promise.all(
          apparelCategories.map((category) =>
            productsApi.getProductsByCategory(category, 4),
          ),
        );
        const nextProducts = responses.flatMap((response) => response.products);
        if (!ignore) {
          setCategoryProducts(nextProducts.slice(0, 5));
        }
      } catch {
        if (!ignore) {
          setCategoryProducts([]);
        }
      }
    };
    loadCategoryProducts();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 3.5, md: 5.4 },
        display: "flex",
        justifyContent: "center",
      }}>
      <Box
        sx={{
          width: "min(100%, 860px)",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "0.86fr 1.9fr 0.86fr",
          },
          gridTemplateRows: { sm: "repeat(2, 1fr)" },
          gap: { xs: 2, sm: 2 },
          minHeight: { sm: 278, md: 300 },
        }}>
        <ApiProductTile
          product={showcaseProducts[0]}
          fallbackLabel="Shop Hoodie"
          bgcolor="#f3ecfb"
          imgWidth="83%"
          loading={loading && categoryProducts.length === 0}
        />
        <Box
          sx={{
            gridRow: { sm: "1 / span 2" },
            position: "relative",
            minHeight: { xs: 276, sm: "auto" },
            bgcolor: "#91cf86",
            borderRadius: 1.5,
            overflow: "hidden",
          }}>
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.12) 0 43%, transparent 43%), linear-gradient(145deg, transparent 0 57%, rgba(0,78,72,0.24) 57% 100%)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              right: { xs: -34, sm: -46 },
              bottom: -4,
              width: "43%",
              height: "80%",
              bgcolor: "rgba(0,83,78,0.35)",
              clipPath: "polygon(42% 0, 100% 18%, 100% 100%, 0 100%, 0 28%)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              right: { xs: -12, md: -16 },
              top: { xs: 66, md: 72 },
              width: { xs: 72, md: 86 },
              height: "78%",
              bgcolor: "#45d0b6",
              opacity: 0.8,
              clipPath: "polygon(32% 0, 100% 9%, 100% 100%, 0 100%, 0 24%)",
            }}
          />
          {mainProduct && (
            <Box
              component="img"
              src={mainProduct.thumbnail}
              alt={mainProduct.title}
              loading="lazy"
              sx={{
                position: "absolute",
                left: "50%",
                top: "49%",
                width: { xs: "72%", sm: "74%" },
                height: { xs: "74%", sm: "78%" },
                objectFit: "contain",
                transform: "translate(-50%, -50%) rotate(1deg)",
                filter: "drop-shadow(0 26px 20px rgba(0,0,0,0.16))",
              }}
            />
          )}
          {loading && !mainProduct && (
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                top: "48%",
                width: "58%",
                height: "58%",
                transform: "translate(-50%, -50%)",
                borderRadius: 3,
                bgcolor: "rgba(255,255,255,0.25)",
              }}
            />
          )}
          <Box
            sx={{
              position: "absolute",
              left: { xs: 92, md: 126 },
              top: { xs: 155, md: 174 },
              width: { xs: 124, md: 150 },
              height: { xs: 25, md: 31 },
              bgcolor: "#7fd5d7",
              transform: "rotate(-10deg)",
              opacity: 0.9,
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              left: { xs: 116, md: 156 },
              top: { xs: 195, md: 218 },
              width: { xs: 116, md: 142 },
              height: { xs: 23, md: 29 },
              bgcolor: "#7fd5d7",
              transform: "rotate(-10deg)",
              opacity: 0.9,
              zIndex: 1,
            }}
          />
          <Button
            sx={{
              ...actionButtonSx,
              position: "absolute",
              left: "50%",
              bottom: { xs: 20, md: 23 },
              transform: "translateX(-50%)",
              zIndex: 2,
            }}>
            {getCardLabel(mainProduct, "Shop T-shirt")}
          </Button>
        </Box>
        <ApiProductTile
          product={showcaseProducts[1]}
          fallbackLabel="Shop Sweater"
          bgcolor="#fff0e6"
          imgWidth="88%"
          loading={loading && categoryProducts.length === 0}
        />
        <ApiProductTile
          product={showcaseProducts[3]}
          fallbackLabel="Shop Tanktop"
          bgcolor="#fbecd2"
          imgWidth="82%"
          loading={loading && categoryProducts.length === 0}
        />
        <ApiProductTile
          product={showcaseProducts[4]}
          fallbackLabel="Shop Designer"
          bgcolor="#f1f1f1"
          imgWidth="84%"
          loading={loading && categoryProducts.length === 0}
        />
      </Box>
    </Box>
  );
}

export default CategoryShowCase;
