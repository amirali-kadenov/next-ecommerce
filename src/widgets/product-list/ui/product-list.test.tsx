// import React from "react";
// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import { ProductList } from "./product-list";
// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";

// // Mock the API calls
// jest.mock("@/entities/product/api");

// const mockProducts = [
//   {
//     id: 1,
//     title: "Product 1",
//     description: "Description 1",
//     price: 10,
//     currency: "$",
//     image: "/image1.jpg",
//     rating: 4.5,
//   },
//   {
//     id: 2,
//     title: "Product 2",
//     description: "Description 2",
//     price: 20,
//     currency: "$",
//     image: "/image2.jpg",
//     rating: 3.8,
//   },
// ];

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// describe("ProductList", () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//     (api.getProducts as jest.Mock).mockResolvedValue(mockProducts);
//   });

//   it("renders product list and allows sorting and searching", async () => {
//     render(
//       <Provider store={store}>
//         <ProductList />
//       </Provider>
//     );

//     // Wait for products to load
//     await waitFor(() => {
//       expect(screen.getByText("Product 1")).toBeInTheDocument();
//       expect(screen.getByText("Product 2")).toBeInTheDocument();
//     });

//     // Check if sorting options are present
//     expect(screen.getByText("Sort by")).toBeInTheDocument();
//     expect(screen.getByText("Order")).toBeInTheDocument();

//     // Check if search input is present
//     const searchInput = screen.getByPlaceholderText("Search products...");
//     expect(searchInput).toBeInTheDocument();

//     // Test search functionality
//     fireEvent.change(searchInput, { target: { value: "Product 1" } });
//     await waitFor(() => {
//       expect(api.getProducts).toHaveBeenCalledWith(
//         1,
//         "price",
//         "asc",
//         "Product 1"
//       );
//     });

//     // Test sorting functionality
//     const sortBySelect = screen.getByText("Sort by");
//     fireEvent.click(sortBySelect);
//     fireEvent.click(screen.getByText("Rating"));
//     await waitFor(() => {
//       expect(api.getProducts).toHaveBeenCalledWith(
//         1,
//         "rating",
//         "asc",
//         "Product 1"
//       );
//     });

//     const orderSelect = screen.getByText("Order");
//     fireEvent.click(orderSelect);
//     fireEvent.click(screen.getByText("Descending"));
//     await waitFor(() => {
//       expect(api.getProducts).toHaveBeenCalledWith(
//         1,
//         "rating",
//         "desc",
//         "Product 1"
//       );
//     });
//   });

//   it("renders loading state", () => {
//     (api.getProducts as jest.Mock).mockReturnValueOnce(new Promise(() => {}));
//     render(
//       <Provider store={store}>
//         <ProductList />
//       </Provider>
//     );

//     expect(screen.getAllByTestId("product-card-skeleton")).toHaveLength(8);
//   });

//   it("renders empty state when no products are found", async () => {
//     (api.getProducts as jest.Mock).mockResolvedValueOnce([]);
//     render(
//       <Provider store={store}>
//         <ProductList />
//       </Provider>
//     );

//     await waitFor(() => {
//       expect(screen.getByText("No products found")).toBeInTheDocument();
//     });
//   });

//   it("renders error state when API call fails", async () => {
//     (api.getProducts as jest.Mock).mockRejectedValueOnce(
//       new Error("API error")
//     );
//     render(
//       <Provider store={store}>
//         <ProductList />
//       </Provider>
//     );

//     await waitFor(() => {
//       expect(
//         screen.getByText("Oops! Something went wrong")
//       ).toBeInTheDocument();
//     });
//   });
// });
export {};
