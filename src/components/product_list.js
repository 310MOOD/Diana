import React, { Component } from "react";
import { connect } from "react-redux";
import { requestFakeData, changeActiveItem } from "../actions/products";
import { selectors } from "../reducers/index";
import ProductInfo from "./product_info";

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopup: false
    };
  }

  componentDidMount() {
    this.props.onRequestFakeData();
  }

  togglePopup = itemId => {
    this.setState({
      showPopup: !this.state.showPopup
    });

    this.props.onActiveItemChange({ itemId });
  };

  render() {
    const { selectedItems } = this.props;
    return (
      <div>
        {selectedItems.length > 0
          ? selectedItems.map(item => {
              const { name, price, imageSrc } = item;
              return (
                <div
                  className="fl w-20 ph1"
                  key={item.id}
                  onClick={() => this.togglePopup(item.id)}
                >
                  <a>
                    <img alt="robots" src={imageSrc} />
                  </a>
                  <a>
                    <p>{name}</p>
                    <p>310MOOD / ${price}</p>
                  </a>
                </div>
              );
            })
          : null}

        <div className="app">
          {this.state.showPopup ? (
            <ProductInfo closePopup={this.togglePopup} /> //do lazy loading here
          ) : null}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  const {
    getAccountSelectors,
    getSelectedItems,
    getProductSelectors
  } = selectors(state);
  const { hasProduct } = getProductSelectors();
  return {
    userPhoneNumber: getAccountSelectors().getUserPhoneNumber(),
    selectedItems: hasProduct() ? getSelectedItems() : []
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onRequestFakeData: payload => dispatch(requestFakeData(payload)),
    onActiveItemChange: payload => dispatch(changeActiveItem(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
