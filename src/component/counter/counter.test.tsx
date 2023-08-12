import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./counter";

describe("Counter", () => {
  test("renders correctly ", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const buttonIncrement = screen.getByRole("button", {
      name: "Increment",
    });
    expect(buttonIncrement).toBeInTheDocument();
  });

  test("render count value of 0 at initialState", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  //user interactions

  test("render a count of 1 after clicking the Increment button", async () => {
    //
    user.setup();

    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {
      name: "Increment",
    });
    //click() is not a pointer interactions.
    //it is the convenience api that internally calls the pointer api
    await user.click(buttonIncrement);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  // test("render a count of 2 after clicking the Increment button twice.", async () => {
  //   user.setup();

  //   render(<Counter />);

  //   const incrementButton = screen.getByRole("button");
  //   await user.dblClick(incrementButton);

  //   const countElement = screen.getByRole("heading");
  //   expect(countElement).toHaveTextContent("2");
  // });

  //STUDY ON POINTER INTERACTIONS
});
