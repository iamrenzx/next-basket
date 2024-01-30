import { Product } from "@/types/product";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_API_URL || "" }),
  endpoints: (builder) => ({
    getProducts: builder.query<{ products: Product[] }, void>({
      query: () => "products",
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
