import React, { Component } from "react";
import { connect } from "react-redux";

class ShoppingCart extends Component {
  constructor() {
    super();
  }

  render() {
    return <div>cart</div>;
  }
}

const mapStateToProps = () => {};

export default connect(mapStateToProps)(ShoppingCart);
