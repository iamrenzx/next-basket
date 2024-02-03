import { Product } from "./product";

type CartItem = {
  product: Product;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
};

export type CartRequest = {
  productId: number;
  quantity: number;
};
