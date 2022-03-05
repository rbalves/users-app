import { render, screen, fireEvent } from "@testing-library/react";
import States from "./States";
import { states } from "./States.data";

describe("StatesList", () => {
  const INITIAL_QUANTITY_DISPLAYED_STATES: number = 5;

  const setStates = jest.fn;
  const setPage = jest.fn;

  beforeEach(() => {
    render(<States states={[]} setStates={setStates} setPage={setPage} />);
  });

  it("should display list with five states not checked and link to see all states", () => {
    const INITIAL_STATES: string[] = states.slice(
      0,
      INITIAL_QUANTITY_DISPLAYED_STATES
    );

    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes.length).toEqual(INITIAL_QUANTITY_DISPLAYED_STATES);

    const initialStatesDisplayed: boolean = INITIAL_STATES.every((state) => {
      const checkBoxesStates = checkboxes.map((checkbox) => {
        return checkbox
          .getAttribute("aria-labelledby")
          ?.replace("checkbox-list-label-", "");
      });

      return checkBoxesStates.includes(state);
    });
    expect(initialStatesDisplayed).toBeTruthy();

    const seeAllLink = screen.getByText("Ver todos");
    expect(seeAllLink).toBeInTheDocument;
  });

  it("should display all states when see all link gets clicked", () => {
    const seeAllLink = screen.getByText("Ver todos");

    fireEvent.click(seeAllLink);

    expect(screen.getAllByRole("checkbox").length).toEqual(states.length);

    const seeLessLink = screen.getByText("Ver menos");

    fireEvent.click(seeLessLink);

    expect(screen.getAllByRole("checkbox").length).toEqual(
      INITIAL_QUANTITY_DISPLAYED_STATES
    );
  });
});
