import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from "@/features/categories.slice";
import productsReducer from "@/features/products.slice";
import usersReducer from "@/features/users.slice";
import ordersReducer from "@/features/orders.slice";

const store = configureStore({
  reducer: {
    categoriesReducer, productsReducer, usersReducer, ordersReducer
  },
});

export default store;