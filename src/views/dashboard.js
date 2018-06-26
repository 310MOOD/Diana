import React, { Component } from "react";
import { connect } from "react-redux";
import { rootSelectors as selectors } from "../reducers/index";
import Header from "../components/header";
import { requestFakeData } from "../actions/products";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onRequestFakeData();
  }

  render() {
    const { items, userPhoneNumber } = this.props;
    return (
      <div>
        <Header />
        <p>User: {userPhoneNumber}</p>
        <ul>
          {items.length > 0
            ? items.map(item => {
                return <li key={item.id}>{item.id}</li>;
              })
            : null}
        </ul>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  const { getAccountSelectors, getProductSelectors } = selectors(state);

  return {
    userPhoneNumber: getAccountSelectors().getUserPhoneNumber(),
    items: getProductSelectors().getItems()
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onRequestFakeData: () => dispatch(requestFakeData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
