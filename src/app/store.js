import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../rtk/products/productsSlice";

const store = configureStore({
  reducer: {
    [productsSlice.reducerPath]: productsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsSlice.middleware),
});
export default store;
