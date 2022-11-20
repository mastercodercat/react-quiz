import { rest } from "msw";

import questionsFixture from "./questions.fixture.json";

const mockHandlers = [
  rest.get("https://opentdb.com/api.php", (_, res, ctx) =>
    res(ctx.json(questionsFixture))
  ),
];

export default mockHandlers;
