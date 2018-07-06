import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "../views/dashboard";
import LoginView from "../views/login_view";
import ShoppingCart from "../views/shopping_cart";

class RouteHandler extends Component {
  render() {
    return (
      <div>
        <Route exact path="/d/" component={Dashboard} />
        <Route path="/login/" component={LoginView} />
        <Route path="/cart/" component={ShoppingCart} />
      </div>
    );
  }
}

export default RouteHandler;
