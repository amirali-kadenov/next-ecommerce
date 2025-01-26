import { useAppDispatch } from "@/app/store";
import { addToCart } from "@/entities/cart";
import { Button } from "@/shared/ui/button";
import { Product } from "../model/api/types";
import { MouseEventHandler } from "react";

type Props = {
  product: Product;
};

export const ProductButton = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const handleAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    dispatch(
      addToCart({
        id: product.id,
        price: product.price,
        quantity: 1,
      })
    );
  };

  return (
    <Button className="w-full md:w-auto" onClick={handleAddToCart}>
      Add to Cart
    </Button>
  );
};
