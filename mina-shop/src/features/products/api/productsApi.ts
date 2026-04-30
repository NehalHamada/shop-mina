import axios from "axios";
import { BASE_URL, Products_Per_Page } from "../../../constants/api";
import type { Product, ProductResponse } from "../types/product.types";

const api = axios.create({
  baseURL: BASE_URL,
});

export const productsApi = {
  getProducts: async (page: number) => {
    const skip = (page - 1) * Products_Per_Page;
    const response = await api.get<ProductResponse>(
      `/products?limit=${Products_Per_Page} & skip= ${skip}`,
    );
    return response.data;
  },

  getProductsById: async (id: number) => {
    const response = await api.get<Product>(`/products/${id}`);
    return response.data;
  },
};
