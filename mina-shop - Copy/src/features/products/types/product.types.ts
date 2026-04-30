export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand?: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
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

export type ApiProductTileProps = {
  product?: Product;
  fallbackLabel: string;
  bgcolor: string;
  imgWidth?: string;
  objectPosition?: string;
  loading?: boolean;
};
