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

  //user.type()//.toHaveValue()// user.click()//toHaveTextContent()
  test("render a count of 10 after clicking the Set button", async () => {
    user.setup();
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton");

    await user.type(amountInput, "10");

    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole("button", { name: /set/i });

    await user.click(setButton);

    const headingElement = screen.getByRole("heading");

    expect(headingElement).toHaveTextContent("10");
  });

  //toHaveFocus() in right order when user.tab()
  test("element are focused in the right order", async () => {
    user.setup();

    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", {
      name: "Set",
    });

    await user.tab();
    expect(incrementButton).toHaveFocus();

    await user.tab();
    expect(amountInput).toHaveFocus();

    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
