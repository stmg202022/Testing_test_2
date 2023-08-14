import { render, screen } from "@testing-library/react";

//For handleing the error when dat fetching in testing.
import { server } from "../../mucks/server";
import { rest } from "msw";

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

  //how to HANDLE THE ERROR by MSW WHEN MOKING THE  DATA REQUEST ?
  test("render error when error occured in data fetching ", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    render(<Users />);

    const errorText = await screen.findByText("Error in fetching Data.");
    expect(errorText).toBeInTheDocument();
  });
});
