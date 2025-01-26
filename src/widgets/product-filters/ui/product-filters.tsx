"use client";

import {
  getProductParams,
  ORDER_PARAM,
  SEARCH_PARAM,
  SORT_PARAM,
} from "@/entities/product";
import { SearchBar } from "./search-bar";
import { SortAndOrder } from "./sort-and-order";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const ProductFilters = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const toggleParam = (
    paramName: string,
    value: string,
    params: URLSearchParams
  ) => {
    if (value) {
      params.set(paramName, value);
    } else {
      params.delete(paramName);
    }
  };

  const createFilterHandler = (
    handler: (value: string, params: URLSearchParams) => void
  ) => {
    return (value: string) => {
      if (!searchParams) return;

      const params = new URLSearchParams(searchParams);

      handler(value, params);

      replace(`${pathname}?${params.toString()}`);
    };
  };

  const handleSearch = createFilterHandler((value, params) => {
    toggleParam(SEARCH_PARAM, value, params);
  });

  const handleSort = createFilterHandler((value, params) => {
    const [sort, order] = value.split("-");
    toggleParam(SORT_PARAM, sort, params);
    toggleParam(ORDER_PARAM, order, params);
  });

  const { search, sort, order } = getProductParams(searchParams);

  const sortAndOrder = sort && order ? `${sort}-${order}` : undefined;

  return (
    <div className="flex items-center space-x-2">
      <SearchBar
        placeholder="Search products..."
        defaultValue={search}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <SortAndOrder defaultValue={sortAndOrder} onChange={handleSort} />
    </div>
  );
};
