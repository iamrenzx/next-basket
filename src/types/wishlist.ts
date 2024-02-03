import { Product } from "./product";

type Wishlist = {
  product: Product;
};

export type WishlistState = {
  items: Wishlist[];
};

export type WishlistRequest = {
  productId: number;
};
