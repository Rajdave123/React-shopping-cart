import Shop from "../pages/Shop";
import { render, screen } from "@testing-library/react";
import { ProductType } from "../types/product.type";

it("should render empty message if no product found", () => {
  render(<Shop empty={true} />);

  expect(screen.getByText(/No Products Found/i)).toBeInTheDocument();
});

it("should render product list", () => {
  const item = [] as ProductType[];
  render(<Shop empty={false} />);
  // expect(screen.getByText(/No Products Found/i)).toBeInTheDocument();
});
