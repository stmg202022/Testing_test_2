// Greet should render text hello and if a name is passed into the Greet component then
// it should render the name text too
// test.only() and test.skip()
//describe.only() and describe.skip()

import { render, screen } from "@testing-library/react";
import Greet from "./greet";

//THIS IS EXAMPLE OF GROUP TESTS IN JEST
describe("Greet", () => {
  //
  test("Greet should render hello", () => {
    render(<Greet />);

    const textElement = screen.getByText("Hello");

    expect(textElement).toBeInTheDocument();
  });

  //THIS IS NESTED
  describe("Nested", () => {
    test("should render a name props", () => {
      const name = "Samson";

      render(<Greet name={name} />);

      // const textElement = screen.getByText(new RegExp(name, "i")); // Use RegExp with "i" flag for case-insensitive matching
      const textElement = screen.getByText("Hello Samson");

      expect(textElement).toBeInTheDocument();
    });
    //
  });
});
