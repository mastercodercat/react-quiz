import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Quiz = lazy(() => import("./pages/Quiz"));
const Score = lazy(() => import("./pages/Score"));

export enum RouteLink {
  Home = "/",
  Quiz = "/quiz/:id",
  Score = "/score",
}

const Routes = () => (
  <Switch>
    <Route path={RouteLink.Home} exact component={Home} />
    <Route path={RouteLink.Quiz} component={Quiz} />
    <Route path={RouteLink.Score} component={Score} />

    <Redirect to={RouteLink.Home} />
  </Switch>
);

export default Routes;
