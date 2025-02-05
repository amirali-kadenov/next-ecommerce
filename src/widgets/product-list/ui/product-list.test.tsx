import React from "react";
import { render, screen } from "@testing-library/react";
import { ProductList } from "./product-list";
import { productApi } from "@/entities/product";
import { PRODUCT_LIST_TEST_IDS } from "../lib/constants";
import { Provider } from "react-redux";
import { createStore } from "@/app/store";

jest.mock("@/entities/product/model/api/product-api.ts", () => ({
  productApi: {
    getProducts: jest.fn(),
  },
}));

describe("ProductList", () => {
  it("renders ProductListError when products is null when there is an error", async () => {
    (productApi.getProducts as jest.Mock).mockResolvedValue(null);

    render(await ProductList({}));

    expect(
      await screen.findByTestId(PRODUCT_LIST_TEST_IDS.ERROR)
    ).toBeInTheDocument();
  });

  it("renders ProductListEmpty when products is an empty array", async () => {
    (productApi.getProducts as jest.Mock).mockResolvedValue([]);

    render(await ProductList({}));

    expect(
      await screen.findByTestId(PRODUCT_LIST_TEST_IDS.EMPTY)
    ).toBeInTheDocument();
  });

  it("renders ProductListInfiniteScroll when products is a non-empty array", async () => {
    const products = [
      {
        id: 1,
        title: "Wireless Bluetooth Headphones",
        description:
          "High-quality wireless headphones with noise-cancellation and long battery life.",
        price: 99.99,
        currency: "USD",
        image: null,
        rating: 4.5,
      },
    ];

    (productApi.getProducts as jest.Mock).mockResolvedValue(products);

    const jsx = await ProductList({});

    render(<Provider store={createStore()}>{jsx}</Provider>);

    await expect(
      screen.getByTestId(PRODUCT_LIST_TEST_IDS.LIST)
    ).toBeInTheDocument();
  });
});
