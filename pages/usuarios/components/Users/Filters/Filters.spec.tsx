import { fireEvent, render, screen } from "@testing-library/react";
import Filters from "./Filters";

describe("Filters", () => {
  beforeEach(() => {
    render(<Filters pageQuantity={9} totalItems={36} />);
  });

  it("should inform the number of items on the page and the total number of items", () => {
    const message = screen.getByTestId("filters__text--quantity-items");
    expect(message.textContent).toEqual(`Exibindo 9 de 36 itens`);
  });

  it.todo("should display list with items to order");
});
