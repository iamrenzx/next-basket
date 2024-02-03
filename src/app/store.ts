import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { productApi } from "../services/products/productApi";
import productReducer from "../services/products/productSlice";
import cartReducer from "../services/cart/cartSlice";
import wishlistReducer from "../services/wishlist/wishlistSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["cart", "wishlist"],
};

const rootReducer = combineSlices({
  [productApi.reducerPath]: productApi.reducer,
  product: productReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Redux persist
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productApi.middleware),
});

// Create a persistor object to persist the entire state
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
