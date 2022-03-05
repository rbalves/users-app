import { render, screen } from "@testing-library/react";
import Breadcrumbs from ".";

describe("Breadcrumbs", () => {
  const breadcrumbs = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/usuarios",
      label: "Usuários",
    },
  ];

  it("should render component", () => {
    const { container } = render(<Breadcrumbs breadcrumbsData={breadcrumbs} />);
    expect(container).toBeInTheDocument;
  });

  it.todo("should not display link when have only one item");

  it.todo(
    "should display center dots when quantity items is greater than four"
  );
});
