import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../img/logo.png";
import { Route, Link } from "react-router-dom";
import { CATEGORIES } from "../constants";
import { changeSeletedCategory } from "../actions/products";
import FittingRoom from "../views/fitting_room";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { showCart: false };
  }

  handleClick = () => {
    this.setState({
      showCart: !this.state.showCart
    });
  };

  hanleCategoryChange = (newCategory = CATEGORIES.ALL) => {
    this.props.onCategoryChange({ newCategory });
  };

  renderCategories = () => {
    return (
      <div className="dib">
        <div
          className="link dim black dib m2"
          onClick={() => this.hanleCategoryChange()}
        >
          <p>全部产品 </p>
          <p>ALL </p>
        </div>
        <div
          className="link dim black dib mh2"
          onClick={() => this.hanleCategoryChange(CATEGORIES.TOP)}
        >
          <p> 上衣 </p>
          <p> top </p>
        </div>
        <div
          className="link dim black dib mh2"
          onClick={() => this.hanleCategoryChange(CATEGORIES.BOTTOM)}
        >
          <p> 下装 </p>
          <p>bottom </p>
        </div>
        <div
          className="link dim black dib mh2"
          onClick={() => this.hanleCategoryChange(CATEGORIES.JACKET)}
        >
          <p>外套</p>
          <p> jacket</p>
        </div>
        <div
          className="link dim black dib mh2"
          onClick={() => this.hanleCategoryChange(CATEGORIES.ACCESSORY)}
        >
          <p>配饰</p>
          <p>accessory</p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <header className="bg-white w-100 ph2 pv3 ph4-m ph4-l">
        <nav className="f7 fw6 ttu tracked bb">
          <div className="w-70 dib">
            <Link to="/d/" className="dib w3 mh2">
              <img src={logo} alt="Site Name" />
            </Link>
            <Route path="/d/" render={this.renderCategories} />
          </div>
          <div className="w-15 dib">
            <a className="dim black dib ml2" onClick={() => this.handleClick()}>
              <p>我的试衣间</p>
              <p> my fitting room</p>
            </a>
            <div className="link dim black dib ml2" href="#" title="Contact">
              <p>退出</p>
              <p>sign out</p>
            </div>

            <div>
              {this.state.showCart ? (
                <FittingRoom handleClick={this.handleClick} />
              ) : null}
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCategoryChange: payload => dispatch(changeSeletedCategory(payload))
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
