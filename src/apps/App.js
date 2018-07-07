import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../css/App.css";
import RouteHandler from "./route_handler";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <RouteHandler />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
