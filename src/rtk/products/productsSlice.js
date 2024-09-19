import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (builder) => ({}),
});

export default productAPI;
