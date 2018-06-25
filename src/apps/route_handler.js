import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "../views/dashboard";

class RouteHandler extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Dashboard} />
      </div>
    );
  }
}

export default RouteHandler;
