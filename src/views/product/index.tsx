import { productApi, ProductDetails } from "@/entities/product";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(
  { params }: Props,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;
  const product = await productApi.getProduct({ id });

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
  params: Promise<{ id: string }>;
};

export const ProductPage = async ({ params }: Props) => {
  const { id } = await params;
  const product = await productApi.getProduct({ id });

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetails product={product} />
    </div>
  );
};
