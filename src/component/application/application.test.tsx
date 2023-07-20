import { Application } from "./application";
import { getByRole, render, screen } from "@testing-library/react"; //from RTL

describe("Application", () => {
  test("render correctly", () => {
    render(<Application />);

    //For headings
    const headingOneElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(headingOneElement).toBeInTheDocument();

    const headingTwoElement = screen.getByRole("heading", {
      name: "Section1", // We can use level incase of name in heading
    });
    expect(headingTwoElement).toBeInTheDocument();

    //For single textbox // type="text"
    // const nameElement = screen.getByRole("textbox");
    // expect(nameElement).toBeInTheDocument();

    // TestingLibraryElementError: Found multiple elements with the role "textbox" //type="text"
    const nameElement = screen.getByRole("textbox", {
      name: "Name:",
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio:",
    });
    expect(bioElement).toBeInTheDocument();

    //
    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    //
    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeInTheDocument();

    //
    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
    //
  });
});
