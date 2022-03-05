import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it.skip("should display input search", () => {
    const input = screen.getByRole("textbox");
    expect(input.getAttribute("placeholder")).toEqual("Buscar aqui");
  });
});
