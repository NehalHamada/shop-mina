import type { RootState } from "../../../app/store";

export const selectProducts = (state: RootState) => state.products.products;

export const selectSelectedProduct = (state: RootState) =>
  state.products.selectedProduct;

export const selectProductsLoading = (state: RootState) =>
  state.products.loading;

export const selectProductsError = (state: RootState) => state.products.error;

export const selectCurrentPage = (state: RootState) =>
  state.products.currentPage;

export const selectProductsTotal = (state: RootState) => state.products.total;
