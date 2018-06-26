import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../actions/actions";

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: ""
    };
  }

  onInputChange = event => {
    this.setState({ phoneNumber: event.target.value });
  };

  handleLoginButtonClick = () => {
    this.props.onUserLogin(this.state.phoneNumber);
  };

  render() {
    return (
      <div>
        <h1>WELCOME</h1>
        <p>hi</p>
        <input onChange={this.onInputChange} />
        <Link to="/d/">
          <button onClick={this.handleLoginButtonClick}>Login</button>
        </Link>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    onUserLogin: phoneNumber => dispatch(registerUser({ phoneNumber }))
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(LoginView);
