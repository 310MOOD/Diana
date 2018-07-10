import React, { Component } from "react";
import { connect } from "react-redux";
import CartList from "../components/cart_list";
import Header from "../components/header";
import ProductSummary from "../components/product_summary";

class ShoppingCart extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <CartList />
        <ProductSummary />
      </div>
    );
  }
}

const mapStateToProps = () => {};

export default connect(mapStateToProps)(ShoppingCart);
