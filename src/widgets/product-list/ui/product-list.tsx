import { productApi } from "@/entities/product";
import { ProductListInfiniteScroll } from "./product-list-infinite-scroll";
import { ProductListError } from "./product-list-error";
import { ProductListEmpty } from "./product-list-empty";

type SearchParams = {
  search?: string;
  page?: string;
};

type Props = {
  searchParams?: SearchParams;
};

export const ProductList = async ({ searchParams }: Props) => {
  const products = await productApi.getProducts(searchParams);

  if (!products) return <ProductListError />;

  if (!products.length) return <ProductListEmpty />;

  return <ProductListInfiniteScroll initialProducts={products} />;
};
