import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Counter } from "./Counter";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
describe("Counter testing", () => {
  it("should with only first parametr", () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });

    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  it("increment", () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });

    userEvent.click(screen.getByTestId("increment-btn"));

    expect(screen.getByTestId("value-title")).toHaveTextContent("11");
  });

  it("decrement", () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    userEvent.click(screen.getByTestId("decrement-btn"));

    expect(screen.getByTestId("value-title")).toHaveTextContent("9");
  });
});