// import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should render an initial count value correctly ", () => {
    // render(<useCounter />); //it is giving a error due to dataTypes and declearing hook at outer fn

    const { result } = renderHook(useCounter); //get the result return by useCounter Hook

    expect(result.current.count).toBe(0);
  });

  test("should accept and render the same initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });

    expect(result.current.count).toBe(10);
  });
});
