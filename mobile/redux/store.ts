import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "../features/products.slice";
import usersReducer from "../features/users.slice";
import ordersReducer from "../features/orders.slice";
import stockReducer from "../features/stock.slice";

export const store = configureStore({
  reducer: {
    productsReducer, usersReducer, ordersReducer, stockReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch