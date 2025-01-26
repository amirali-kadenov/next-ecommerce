"use client";

import { Card, CardContent, CardFooter } from "@/shared/ui/card";
import { Product } from "../model/api/types";
import { getTruncatedText } from "../lib/utils";
import { ProductRating } from "./product-rating";
import { ProductButton } from "./product-button";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/product/${product.id}`}>
      <Card className="overflow-hidden">
        <div className="aspect-square relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.title}
            className="object-cover w-full"
          />
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2">{product.title}</h3>

          <p className="text-sm text-muted-foreground mb-2">
            {getTruncatedText(product.description, 100)}
          </p>

          <ProductRating rating={product.rating} />

          <p className="font-bold text-lg">
            {product.currency} {product.price.toFixed(2)}
          </p>
        </CardContent>

        <CardFooter className="p-4">
          <ProductButton product={product} />
        </CardFooter>
      </Card>
    </Link>
  );
};
