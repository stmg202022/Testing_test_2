import { render, screen } from "@testing-library/react";
import { MuiMode } from "./mui_mode";
import { AppProviders } from "../../providers/app_providers";

describe("MuiMode", () => {
  test("render the dark mode content correctly", () => {
    render(<MuiMode />, {
      wrapper: AppProviders,
    });

    const headingElement = screen.getByRole("heading");

    expect(headingElement).toBeInTheDocument();

    expect(headingElement).toHaveTextContent("dark mode");
  });
});
