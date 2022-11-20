# Trivia App

This app is built for simple trivia quiz test.

## Installation

Installation steps:

```sh
npm install
or
yarn install
```

## How to run

- First, copy `.env.example` file and rename it to `.env`.

- Second, make sure `REACT_APP_SERVER_API_URL` in `.env` is `https://opentdb.com/api.php`

- Third, run development server using below commands.

  ```sh
  npm start
  or
  yarn start
  ```

## How to test

For unit tests,

```sh
npm test
or
yarn test
```

For e2e tests,

```sh
npm start
npm run e2e
or
yarn start
yarn e2e
```

## Application Dependencies

- TypeScript
- React / React Hook
- Redux(toolkit)
- Testing Library
- Cypress
- MSW
- Axios

## Routes / Pages

- `/`
  Home page for introduction of Trivia Challenge

- `/quiz/:id`
  Quiz page for answering questions

- `/score`
  Score page of correct answers

## Directory Structure

All context providers should be registered on `App.tsx` for consistency, while all routing should be setup on `Routes.tsx`.

- `components`
  include reusable components, layout and ErrorBoundary without any boundings with requests or business logic
- `pages`
  include containers used to connect `components`, business logic and unit tests. Each page has its unit tests written by testing-library and mock server. Testcases are written in `__test__` folders.
  - `Home`
  - `Quiz`
  - `Score`
- `services`
  include services and api workers for application
- `store`
  includes redux states, actions and selectors for application
- `test`
  includes test helper and mock data
