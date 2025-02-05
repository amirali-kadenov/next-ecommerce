import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, CartSchema } from "@/entities/cart";
import { useDispatch } from "react-redux";

export type StateSchema = {
  cart: CartSchema;
};

export const createStore = () =>
  configureStore({
    reducer: {
      cart: cartReducer,
    },
  });

export const store = createStore();

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
