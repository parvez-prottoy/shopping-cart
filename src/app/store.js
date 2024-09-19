import { configureStore } from "@reduxjs/toolkit";
import productAPI from "../rtk/products/productsSlice";

const store = configureStore({
  reducer: {
    [productAPI.reducerPath]: productAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productAPI.middleware),
});
export default store;
