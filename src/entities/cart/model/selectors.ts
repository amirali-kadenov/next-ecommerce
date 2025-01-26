import { StateSchema } from "@/app/store";

export const cartItemsSelector = (state: StateSchema) => state.cart.items;
