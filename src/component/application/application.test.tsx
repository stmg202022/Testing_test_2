import { Application } from "./application";
import { render, screen } from "@testing-library/react"; //from RTL

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

    // const nameElement2 = screen.getByLabelText("Name:");
    // expect(nameElement2).toBeInTheDocument();

    //If diff.. label element contain same text
    const nameElement2 = screen.getByLabelText("Name:", {
      selector: "input",
    });
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByLabelText("Name:", {
      selector: "select",
    });
    expect(nameElement3).toBeInTheDocument();
    //

    const nameElement4 = screen.getByPlaceholderText("Enter your name...");
    expect(nameElement4).toBeInTheDocument();

    const nameElement5 = screen.getByDisplayValue("Samson");
    expect(nameElement5).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio:",
    });
    expect(bioElement).toBeInTheDocument();

    const bioElement2 = screen.getByLabelText("Bio:");
    expect(bioElement2).toBeInTheDocument();

    const bioElement3 = screen.getByPlaceholderText("Enter your Bio...");
    expect(bioElement3).toBeInTheDocument();

    //
    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    //
    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeInTheDocument();

    const checkboxElement2 = screen.getByLabelText(
      "I agree to the term and conditions."
    );
    expect(checkboxElement2).toBeInTheDocument();

    //
    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
    //

    const paragraphElement = screen.getByText("All Fields are mandatory.");
    expect(paragraphElement).toBeInTheDocument();
  });
});
