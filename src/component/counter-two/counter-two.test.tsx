import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./counter-two";
import user from "@testing-library/user-event";

describe("Counter", () => {
  test("render all element correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });

  //Mock functions from jest
  test("handlers are called", async () => {
    user.setup();
    const incrementHandler = jest.fn(); //Mock functions provided by jest
    const decrementHandler = jest.fn(); //Mock functions provided by jest
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );

    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    const decrementBtn = screen.getByRole("button", { name: "Decrement" });

    expect(incrementBtn).toBeInTheDocument();
    expect(decrementBtn).toBeInTheDocument();

    await user.click(incrementBtn);
    await user.click(decrementBtn);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
