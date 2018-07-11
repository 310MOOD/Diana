import React, { Component } from "react";
import { connect } from "react-redux";

class CartList extends Component {
  render() {
    return (
      <div className="bg-white mw-80 ">
        <div className="dib fl w-60 ml5 pl5">
          <p>产品</p>
          <p>PRODUCT</p>
        </div>
        <div className="div fl w-15 mh5 tc">
          <p>数量</p>
          <p>QTY</p>
        </div>
        <div className="div fl w-15 tc">
          <p>价格</p>
          <p>PRICE</p>
        </div>
      </div>
    );
  }
}

export default CartList;
