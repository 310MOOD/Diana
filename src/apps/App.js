import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import RouteHandler from "./route_handler";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <RouteHandler />
        </Router>
      </div>
    );
  }
}

export default App;
