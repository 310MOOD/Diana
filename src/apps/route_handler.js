import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "../views/dashboard";
import LoginView from "../views/login_view";

class RouteHandler extends Component {
  render() {
    return (
      <div>
        <Route exact path="/d/" component={Dashboard} />
        <Route path="/login/" component={LoginView} />
      </div>
    );
  }
}

export default RouteHandler;
