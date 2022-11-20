import {
  screen,
  act,
  fireEvent,
  waitFor,
  RenderResult,
} from "@testing-library/react";

import renderTest, { mockDispatch } from "test/helpers/renderTest";
import Home from "..";

let wrapper: RenderResult;

describe("Home", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    wrapper = renderTest(<Home />, { routes: ["/"] }, "/");
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

  it("should display home", () => {
    expect(
      screen.queryByText("Welcome to the Trivia Challenge!")
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        "You will be presented with 10 True or False questions"
      )
    ).toBeInTheDocument();
    expect(screen.queryByText("Can you score 100%?")).toBeInTheDocument();
    expect(screen.queryByText("Begin")).toBeInTheDocument();
  });
});
