"use client";

import { ProductRating } from "./product-rating";
import { ProductButton } from "./product-button";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  rating: number;
}

export function ProductDetails({ product }: { product: Product }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={300}
          className="object-cover rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-xl mb-4">
          {product.currency}
          {product.price.toFixed(2)}
        </p>

        <ProductRating rating={product.rating} />

        <p className="mb-6">{product.description}</p>

        <ProductButton product={product} />
      </div>
    </div>
  );
}
