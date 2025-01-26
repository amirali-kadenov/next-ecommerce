import { ProductCardSkeleton } from "@/entities/product/ui/product-card-skeleton";
import { ProductListContainer } from "./product-list-container";
import { DEFAULT_PRODUCTS_LIMIT } from "@/entities/product";

type Props = {
  className?: string;
  itemsCount?: number;
};

export const ProductListSkeleton = ({
  className,
  itemsCount = DEFAULT_PRODUCTS_LIMIT,
}: Props) => {
  return (
    <ProductListContainer className={className}>
      {[...Array(itemsCount)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </ProductListContainer>
  );
};
