import { ReadonlyURLSearchParams } from "next/navigation";
import { ORDER_PARAM, SEARCH_PARAM, SORT_PARAM } from "./constants";

export const getProductParams = (searchParams: ReadonlyURLSearchParams) => {
  const search = searchParams?.get(SEARCH_PARAM)?.toString();
  const sort = searchParams?.get(SORT_PARAM)?.toString();
  const order = searchParams?.get(ORDER_PARAM)?.toString();

  return { search, sort, order };
};
