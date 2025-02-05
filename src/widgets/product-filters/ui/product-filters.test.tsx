import { render, screen } from "@testing-library/react";
import { ProductFilters } from "./product-filters";

const mockReplace = jest.fn();

jest.mock("next/navigation", () => ({
  usePathname: () => "/test",
  useSearchParams: () => new URLSearchParams(""),
  useRouter: () => ({
    replace: mockReplace,
  }),
}));

describe("ProductFilters", () => {
  beforeEach(() => {
    mockReplace.mockClear();
  });

  it("renders search bar and sort controls", () => {
    render(<ProductFilters />);

    expect(
      screen.getByPlaceholderText("Search products...")
    ).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(true).toBe(true);
  });
});
