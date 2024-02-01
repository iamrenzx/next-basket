export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ProductsResponse = {
  limit: number;
  total: number;
  skip: number;
  products: Product[];
};

export type ProductsRequest = {
  limit: number;
  skip: number;
};
