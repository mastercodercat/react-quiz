import { ReactElement, Suspense } from "react";
import { Provider } from "react-redux";
import { MemoryRouter, Switch, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { render } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import * as History from "history";

import { results as questions } from "../mocks/questions.fixture.json";

interface TestRenderConfig {
  routes?: History.LocationDescriptor[];
}

const mockLoader = <div>Loading...</div>;
const mockStore = configureMockStore();
const store = mockStore({
  quiz: {
    loading: false,
    questions,
    answers: [],
    total: 10,
  },
});
export const mockDispatch = jest.fn(store.dispatch);
store.dispatch = mockDispatch;

export { store };

const renderTest = (
  ui: ReactElement,
  config?: TestRenderConfig,
  path?: string
) =>
  render(
    <Provider store={store}>
      <Suspense fallback={mockLoader}>
        <MemoryRouter initialEntries={config?.routes}>
          <HelmetProvider>
            <Switch>
              <Route exact path={path}>
                {ui}
              </Route>
            </Switch>
          </HelmetProvider>
        </MemoryRouter>
      </Suspense>
    </Provider>
  );

export default renderTest;
