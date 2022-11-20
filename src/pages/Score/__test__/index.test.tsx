import {
  screen,
  act,
  waitFor,
  fireEvent,
  RenderResult,
} from "@testing-library/react";

import renderTest from "test/helpers/renderTest";
import Score from "..";

let wrapper: RenderResult;

describe("Score", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    wrapper = renderTest(<Score />, { routes: ["/score"] }, "/score");
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  it("should test snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should display score board", () => {
    expect(screen.queryByText("You scored 0/10")).toBeInTheDocument();
    expect(screen.queryByText("Go Home")).toBeInTheDocument();
    expect(screen.queryByText("Play Again")).toBeInTheDocument();
  });

  it("should go home after clicking button", async () => {
    fireEvent.click(screen.queryByText("Go Home") as Element);

    await waitFor(() => {
      expect(
        screen.queryByText("Welcome to the Trivia Challenge!")
      ).toBeInTheDocument();
    });
  });
});
