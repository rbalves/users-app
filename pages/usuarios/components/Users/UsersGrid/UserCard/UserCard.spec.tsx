import { render, screen } from "@testing-library/react";
import { user } from "mocks/user";
import UserCard from "./UserCard";

describe("UserCard", () => {
  beforeEach(() => {
    render(<UserCard user={user} />);
  });

  it("should render user card with profile image, name and address data", () => {
    const image = screen.getByRole("img");
    expect(image.getAttribute("src")).toEqual(user.picture.large);
    expect(image.getAttribute("alt")).toEqual(
      `${user.name.first} ${user.name.last} profile picture`
    );

    const name = screen.getByText(`${user.name.first} ${user.name.last}`);
    expect(name).toBeInTheDocument;

    const number: string = user.location.street.substring(
      0,
      user.location.street.indexOf(" ")
    );
    const road = user.location.street.substring(
      user.location.street.indexOf(" ") + 1
    );

    const address = screen.getByText(`${road}, ${number}`);
    expect(address).toBeInTheDocument;

    const locality = screen.getByText(
      `${user.location.city}, ${user.location.state} - CEP: ${user.location.postcode}`
    );
    expect(locality).toBeInTheDocument;
  });

  it.todo("should redirect to profile page when card gets clicked");
});
