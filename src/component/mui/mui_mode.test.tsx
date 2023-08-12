import { render, screen } from "../../test-utils";
import { MuiMode } from "./mui_mode";
// import { AppProviders } from "../../providers/app_providers";

describe("MuiMode", () => {
  test("render the dark mode content correctly", () => {
    // render(<MuiMode />, {
    //   wrapper: AppProviders,
    // });

    render(<MuiMode />);

    const headingElement = screen.getByRole("heading");

    expect(headingElement).toBeInTheDocument();

    expect(headingElement).toHaveTextContent("dark mode");
  });
});
