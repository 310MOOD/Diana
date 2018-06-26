import React, { Component } from "react";
import { connect } from "react-redux";
import { rootSelectors as selectors } from "../reducers/index";
import Header from "../components/header";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <p>User: {this.props.userPhoneNumber}</p>
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

export default connect(
  mapStateToProps,
  undefined
)(Dashboard);
