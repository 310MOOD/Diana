import React, { Component } from "react";
import ProductSummary from "../components/product_summary";
import CartList from "../components/cart_list";

class FittingRoom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="fitting_room">
        <div className="dib pa2 fr w-100 header">
          <p className="dib">我的试衣间</p>
          <button onClick={this.props.handleClick} className="fr">
            X
          </button>
        </div>

        <CartList />
        <ProductSummary />
      </div>
    );
  }
}

export default FittingRoom;
