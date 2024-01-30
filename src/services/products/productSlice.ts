import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    // ... initial state for products
  },
  reducers: {
    // ... product-related reducers
  },
});

export const { actions, reducer } = productSlice;

export default productSlice.reducer;
