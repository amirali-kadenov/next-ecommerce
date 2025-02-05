import { api } from "@/shared/api";
import { DEFAULT_PRODUCTS_LIMIT } from "../../lib/constants";
import type { GetProductParams, GetProductsParams, Product } from "./types";

export const productApi = {
  getProducts: async (params?: GetProductsParams) => {
    const { page, limit, search, order, sort } = params ?? {};

    try {
      const response = await api.get<Product[]>("products", {
        params: {
          _page: page,
          _limit: limit ?? DEFAULT_PRODUCTS_LIMIT,
          _sort: sort,
          _order: order,
          title_like: search,
        },
      });

      return response.data;
    } catch (e) {
      console.error(e);

      return null;
    }
  },

  getProduct: async ({ id }: GetProductParams) => {
    try {
      const response = await api.get<Product[]>("products", {
        params: {
          id,
        },
      });

      return response.data[0];
    } catch (e) {
      console.error(e);

      return null;
    }
  },
};
