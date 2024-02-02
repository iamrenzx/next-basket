import { Product, ProductsRequest, ProductsResponse } from "@/types/product";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_API_URL || "" }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, ProductsRequest>({
      query: ({ skip, limit, category }) =>
        `products${
          category ? `/category/${category}` : `?limit=${limit}&skip=${skip}`
        }`,
    }),
    getProductId: builder.query<Product, { id: number }>({
      query: ({ id }) => `product/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductIdQuery } = productApi;
