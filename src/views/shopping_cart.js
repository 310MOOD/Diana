import React, { Component } from "react";
import { connect } from "react-redux";
import CartList from "../components/cart_list";

class ShoppingCart extends Component {
  constructor() {
    super();
  }

  render() {
    return <CartList />;
  }
}

const mapStateToProps = () => {};

export default connect(mapStateToProps)(ShoppingCart);
