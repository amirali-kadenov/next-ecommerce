import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, CartSchema } from "@/entities/cart";
import { useDispatch } from "react-redux";

export type StateSchema = {
  cart: CartSchema;
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
