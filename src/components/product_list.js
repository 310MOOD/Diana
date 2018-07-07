import React, { Component } from "react";
import { connect } from "react-redux";
import { requestFakeData } from "../actions/products";
import { rootSelectors as selectors } from "../reducers/index";
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

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  render() {
    const { selectedItems } = this.props;
    return (
      <div>
        {selectedItems.length > 0
          ? selectedItems.map(item => {
              const { name, price, imageSrc } = item;
              return (
                <div className="fl w-20 ph1" key={item.id}>
                  <a onClick={this.togglePopup}>
                    <img alt="robots" src={imageSrc} />
                  </a>
                  <a onClick={this.togglePopup}>
                    <p>{name}</p>
                    <p>310MOOD / ${price}</p>
                  </a>
                </div>
              );
            })
          : null}

        <div className="app">
          {this.state.showPopup ? (
            <ProductInfo text="Close Me" closePopup={this.togglePopup} /> //do lazy loading here
          ) : null}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  const { getAccountSelectors, getProductSelectors } = selectors(state);

  return {
    userPhoneNumber: getAccountSelectors().getUserPhoneNumber(),
    selectedItems: getProductSelectors().getselectedItems()
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onRequestFakeData: payload => dispatch(requestFakeData(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
