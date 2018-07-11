import React, { Component } from "react";
import { connect } from "react-redux";

class ProductSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };

  render() {
    return (
      <div className="bg-white mw-80 ">
        <div className="dib fl w-60 ml5">
          <img
            className="w-20 pl5"
            alt="robots"
            src="https://cdn.shopify.com/s/files/1/1004/4558/products/untitled-9654-2_470x.jpg?v=1523642653"
          />
        </div>
        <div className="div fl w-15 mh5 tc v-mid">
          <button onClick={this.IncrementItem}>+</button>
          <p className="dib">{this.state.clicks}</p>
          <button onClick={this.DecreaseItem}>-</button>
        </div>
        <div className="div fl w-15 tc v-mid">
          <p>$199</p>
        </div>
      </div>
    );
  }
}

export default ProductSummary;
