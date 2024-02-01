// productSlice.js
import { Product } from "@/types/product";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ProductState = {
  products: Product[];
};

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    addProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = [...state.products, ...action.payload];
    },
  },
});

export const { setProducts, addProducts } = productSlice.actions;
export default productSlice.reducer;
