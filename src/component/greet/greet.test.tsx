// Greet should render text hello and if a name is passed into the Greet component then
// it should render the name text too
import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("Greet should render hello", () => {
  render(<Greet />);

  const textElement = screen.getByText("Hello");

  expect(textElement).toBeInTheDocument();
});

test("should render a name props that is passed", () => {
  const name = "Samson";

  render(<Greet name={name} />);

  // const textElement = screen.getByText(new RegExp(name, "i")); // Use RegExp with "i" flag for case-insensitive matching
  const textElement = screen.getByText("Hello Samson");

  expect(textElement).toBeInTheDocument();
});
