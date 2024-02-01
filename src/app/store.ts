import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../services/products/productApi";
import productReducer from "../services/products/productSlice"; // Import your custom slice

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    product: productReducer, // Add your custom slice here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
