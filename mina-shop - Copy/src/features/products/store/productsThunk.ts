import { createAsyncThunk } from "@reduxjs/toolkit";
import { productsApi } from "../api/productsApi";
import type { RootState } from "../../../app/store";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (page: number, thunkAPI) => {
    try {
      return await productsApi.getProducts(page);
    } catch {
      return thunkAPI.rejectWithValue("Failed to fetch products");
    }
  },
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id: number, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const cachedProduct = state.products.productDetailsCache[id];

    if (cachedProduct) {
      return cachedProduct;
    }

    try {
      return await productsApi.getProductsById(id);
    } catch {
      return thunkAPI.rejectWithValue("Failed to fetch product details");
    }
  },
);
