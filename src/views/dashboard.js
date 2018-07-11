import React, { Component } from "react";
import { connect } from "react-redux";
import { selectors } from "../reducers/index";
import ProductList from "../components/product_list";
import Scrollable from "../components/scrollable";
import Header from "../components/header";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userPhoneNumber } = this.props;
    return (
      <div>
        <Header />
        <Scrollable>
          <ProductList className="w-80" />
        </Scrollable>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  const { getAccountSelectors } = selectors(state);

  return {
    userPhoneNumber: getAccountSelectors().getUserPhoneNumber()
  };
};

export default connect(mapStateToProps)(Dashboard);
