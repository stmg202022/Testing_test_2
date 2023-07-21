import { render, screen } from "@testing-library/react";

import { Skills } from "./skills";

describe("Skills", () => {
  //define a props pass to Skills component
  const skills = ["HTML", "CSS", "JAVASCRIPT"];
  //
  test("render correctly", () => {
    render(<Skills skills={skills} />);

    //
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
    //
  });

  //
  test("render a list of skills", () => {
    render(<Skills skills={skills} />);

    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length); //dont use hard code hera // 3
  });

  //
});
