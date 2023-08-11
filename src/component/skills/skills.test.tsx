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

  //IF THIS IS PROBLEM FOR setTimeOut()
  // test("start learn button should display after 500milisecond", () => {
  //   render(<Skills skills={skills} />);

  //   const startLearnButton = screen.getByRole("button", {
  //     name: "Start learn",
  //   });

  //   expect(startLearnButton).toBeInTheDocument();
  // });

  //SOLUTIONS OF setTimeOut() //findBy // it is also the example for data fetching
  test("start learn button should display after 500milisecond", async () => {
    render(<Skills skills={skills} />);

    const startLearnButton = await screen.findByRole(
      "button",
      {
        name: "Start learn",
      },
      {
        timeout: 2000, //timeOut set // default is 1000ms
      }
    );
    expect(startLearnButton).toBeInTheDocument();
  });
});
