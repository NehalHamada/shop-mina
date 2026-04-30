import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/common/Layout";
import ProductsDetailsPage from "../features/products/pages/ProductsDetailsPage";
import ProductsPage from "../features/products/pages/ProductsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductsDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
