import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from "@/features/categories.slice";
import productsReducer from "@/features/products.slice";
import usersReducer from "@/features/users.slice";
import ordersReducer from "@/features/orders.slice";

export const store = configureStore({
  reducer: {
    categoriesReducer, productsReducer, usersReducer, ordersReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch