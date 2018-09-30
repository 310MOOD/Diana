import React, { Component } from "react";
import { connect } from "react-redux";

class CartList extends Component {
  render() {
    return (
      <div className="bg-white table_head dib w-100">
        <div className="dib fl w-60 ">
          <p>产品</p>
          <p>PRODUCT</p>
        </div>
        <div className="fl w-20 tc">
          <p>数量</p>
          <p>QTY</p>
        </div>
        <div className="fl w-20 tc">
          <p>价格</p>
          <p>PRICE</p>
        </div>
      </div>
    );
  }
}

export default CartList;
