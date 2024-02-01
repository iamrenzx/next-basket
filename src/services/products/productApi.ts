import { ProductsRequest, ProductsResponse } from "@/types/product";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_API_URL || "" }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, ProductsRequest>({
      query: ({ skip, limit }) => `products?limit=${limit}&skip=${skip}`,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
