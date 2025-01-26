import { ProductFilters } from "@/widgets/product-filters";
import { ProductList, ProductListSkeleton } from "@/widgets/product-list";
import Head from "next/head";
import { Suspense } from "react";

type SearchParams = Promise<{
  search?: string;
}>;

type Props = {
  searchParams?: SearchParams;
};

export const ProductsPage = async (props: Props) => {
  const searchParams = await props.searchParams;

  return (
    <>
      <Head>
        <title>E-commerce Products Page</title>
        <meta name="description" content="Browse our wide range of products" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="flex md:items-center md:gap-y-0 gap-y-2 justify-between mb-6 md:flex-row flex-col">
          <h1 className="text-2xl font-bold">Our Products</h1>
          <ProductFilters />
        </div>

        <Suspense
          key={JSON.stringify(searchParams)}
          fallback={<ProductListSkeleton />}
        >
          <ProductList searchParams={searchParams} />
        </Suspense>
      </main>
    </>
  );
};
