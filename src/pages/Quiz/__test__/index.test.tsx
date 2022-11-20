import React from "react";
import {
  screen,
  waitFor,
  act,
  RenderResult,
  fireEvent,
} from "@testing-library/react";

import renderTest, { store, mockDispatch } from "test/helpers/renderTest";
import Quiz from "..";
import { results as questions } from "test/mocks/questions.fixture.json";

let wrapper: RenderResult;

describe("Quiz", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    wrapper = renderTest(<Quiz />, { routes: ["/quiz/1"] }, "/quiz/:id");
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

  it("should display question", () => {
    expect(screen.getByText("Question 1/10")).toBeInTheDocument();

    expect(screen.queryByText(questions[0].category)).toBeInTheDocument();
    expect(screen.queryByText(questions[0].question)).toBeInTheDocument();
  });

  it("should display answer choices", () => {
    expect(screen.getByTestId("true")).toBeInTheDocument();
    expect(screen.getByTestId("false")).toBeInTheDocument();
  });

  it("should be able to select answer", async () => {
    await waitFor(() => {
      expect(screen.getByTestId("true")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("true") as Element);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  it("should navigate to next question", async () => {
    fireEvent.click(screen.getByText("Next") as Element);

    expect(screen.queryByText(questions[1].category)).toBeInTheDocument();
    expect(screen.queryByText(questions[1].question)).toBeInTheDocument();
  });
});
