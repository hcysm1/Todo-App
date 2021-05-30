import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { HomeRoute } from "./HomeRoute";
import PendingPage from "../components/PendingPage";
import CreatePage from "../components/CreateTodos";
import RestorePage from "../components/RestoreTodos";
import CompletePage from "../components/CompleteTodos";

const Routes = () => (
  <Router>
    <div>
      <Switch>
        <HomeRoute exact path="/" />

        <Route exact path="/pending" component={PendingPage} />

        <Route exact path="/create" component={CreatePage} />

        <Route exact path="/restore" component={RestorePage} />

        <Route exact path="/complete" component={CompletePage} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
