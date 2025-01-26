export type GetProductsParams = {
  page?: string;
  limit?: number;
  search?: string;
  sort?: string;
  order?: string;
};

export type GetProductParams = {
  id: string;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  rating: number;
};
