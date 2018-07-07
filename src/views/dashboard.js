import React, { Component } from "react";
import { connect } from "react-redux";
import { rootSelectors as selectors } from "../reducers/index";
import ProductList from "../components/product_list";
import Scrollable from "../components/scrollable";
import { requestFakeData } from "../actions/products";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userPhoneNumber } = this.props;
    return (
      <Scrollable>
        <ProductList className="w-80" />
      </Scrollable>
    );
  }
}

export const mapStateToProps = state => {
  const { getAccountSelectors, getProductSelectors } = selectors(state);

  return {
    userPhoneNumber: getAccountSelectors().getUserPhoneNumber()
  };
};

export default connect(mapStateToProps)(Dashboard);
