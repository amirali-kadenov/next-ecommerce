import Image from "next/image";
import { FC } from "react";
import { ProductImagePlaceholder } from "./product-image-placeholder";

type Props = { src: string; alt: string };

export const ProductImage: FC<Props> = ({ src, alt }) => {
  if (!src) return <ProductImagePlaceholder />;

  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={300}
      className="object-cover w-full"
    />
  );
};
