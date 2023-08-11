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

  //login button test by QueryBy
  //Only LOGIN button is shown and start learning button is not present in the ui
  test("render login button", () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole("button", {
      name: "LOGIN",
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("Start leraning button is not rendered", () => {
    render(<Skills skills={skills} />);

    const startLearnButton = screen.queryByRole("button", {
      name: "Start learn",
    });
    expect(startLearnButton).not.toBeInTheDocument();
  });

  //
});
