import React, { Component } from "react";
import { connect } from "react-redux";
import { selectors } from "../reducers/index";

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
    const { items = [] } = this.props;

    return (
      <div className="bg-white mw-80 ">
        {items.map(item => {
          return (
            <div>
              <div className="dib fl w-60 ml5">
                <img className="w-20 pl5" alt="robots" src={item.imageSrc} />
              </div>
              <div className="div fl w-15 mh5 tc v-mid">
                <button onClick={this.DecreaseItem}>-</button>
                <p className="dib">{item.count}</p>
                <button onClick={this.IncrementItem}>+</button>
              </div>
              <div className="div fl w-15 tc v-mid">
                <p>${item.totalPrice}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export const mapStateToProps = state => {
  const { getItemById, getCartSelectors, getTotalPriceForAnItem } = selectors(
    state
  );

  return {
    items: getCartSelectors()
      .getCartItems()
      .map(item => {
        return {
          ...item,
          totalPrice: getTotalPriceForAnItem(item.id, item.count),
          imageSrc: getItemById(item.id).imageSrc
        };
      })
  };
};

export default connect(mapStateToProps)(ProductSummary);
