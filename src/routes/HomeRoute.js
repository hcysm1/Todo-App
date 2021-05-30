import React, { Component } from "react";
import { Route } from "react-router-dom";
import CreatePage from "../components/CreateTodos";

class HomeRouteContainer extends Component {
  render() {
    return <CreatePage />;
  }
}

export const HomeRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => <HomeRouteContainer {...props} />} />
);
