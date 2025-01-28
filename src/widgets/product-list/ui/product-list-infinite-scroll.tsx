"use client";

import {
  DEFAULT_PRODUCTS_LIMIT,
  getProductParams,
  Product,
  productApi,
  ProductCard,
} from "@/entities/product";
import { ProductListContainer } from "./product-list-container";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ProductListSkeleton } from "./product-list-skeleton";
import { useSearchParams } from "next/navigation";

type Props = {
  initialProducts: Product[];
};

export const ProductListInfiniteScroll = ({ initialProducts }: Props) => {
  const searchParams = useSearchParams();

  const [products, setProducts] = useState(initialProducts);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);

  const params = getProductParams(searchParams);

  const getNextProducts = async () => {
    const nextProducts = await productApi.getProducts({
      page: String(page),
      ...params,
    });

    if (!nextProducts) {
      setHasMore(false);

      return;
    }

    setProducts([...products, ...nextProducts]);

    if (products.length >= DEFAULT_PRODUCTS_LIMIT) {
      setHasMore(true);
    } else {
      setHasMore(false);
    }

    setPage((prev) => prev + 1);
  };

  return (
    <InfiniteScroll
      scrollThreshold={0.7}
      dataLength={products.length}
      next={getNextProducts}
      hasMore={hasMore}
      loader={
        <ProductListSkeleton
          className="mt-6"
          itemsCount={DEFAULT_PRODUCTS_LIMIT / 2}
        />
      }
    >
      <ProductListContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductListContainer>
    </InfiniteScroll>
  );
};
