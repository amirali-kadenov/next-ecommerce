import { productApi, ProductDetails } from "@/entities/product";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const product = await productApi.getProduct({ id: params.id });

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.title} | E-Commerce Store`,
    description: product.description,
    openGraph: {
      title: `${product.title} | E-Commerce Store`,
      description: product.description,
      type: "article",
      url: `https://mango-store.com/product/${id}`,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | E-Commerce Store`,
      description: product.description,
      images: [product.image],
    },
  };
}

type Props = {
  params: { id: string };
};

export const ProductPage = async ({ params }: Props) => {
  const product = await productApi.getProduct({ id: params.id });

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetails product={product} />
    </div>
  );
};
