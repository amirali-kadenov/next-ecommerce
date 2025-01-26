"use client";

import { Button } from "@/shared/ui/button";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { cartItemsSelector } from "../model/selectors";
import { CartSum } from "./cart-sum";

export const CartButton = () => {
  const cartItems = useSelector(cartItemsSelector);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex items-center space-x-4">
      <CartSum totalItems={totalItems} totalPrice={totalPrice} />

      <Button variant="outline" size="icon">
        <ShoppingCart className="h-4 w-4" />
        <span className="sr-only">Shopping Cart</span>
      </Button>
    </div>
  );
};
