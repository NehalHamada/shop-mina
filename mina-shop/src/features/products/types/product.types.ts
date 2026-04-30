export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  thumbnail: string;
  images: string[];
};

export type ProductResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type ProductsState = {
  products: Product[];
  selectedProduct: Product | null;
  productDetailsCache: Record<number, Product>;
  loading: boolean;
  error: string | null;
  currentPage: number;
  total: number;
};
