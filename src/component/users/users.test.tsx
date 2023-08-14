import { render, screen } from "@testing-library/react";

import { Users } from "./users";

describe("Users", () => {
  //
  test("render element correctly", () => {
    render(<Users />);

    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });
  //

  test("users render correctly in userlist", async () => {
    render(<Users />);

    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });

  //
});
