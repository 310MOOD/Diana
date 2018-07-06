import React, { Component } from "react";
import logo from "../img/logo.png";
import { Route, Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  renderCategories = () => {
    return (
      <div>
        <a className="link dim black dib m2" href="#" title="Home">
          <p>全部产品 </p>
          <p>ALL </p>
        </a>
        <a className="link dim black dib mh2" href="#" title="About">
          <p> 上衣 </p>
          <p> top </p>
        </a>
        <a className="link dim black dib mh2" href="#" title="Store">
          <p> 下装 </p>
          <p>bottom </p>
        </a>
        <a className="link dim black dib mh2" href="#" title="Contact">
          <p>外套</p>
          <p> jacket</p>
        </a>
        <a className="link dim black dib mh2" href="#" title="Contact">
          <p>配饰</p>
          <p>accessory</p>
        </a>
      </div>
    );
  };

  render() {
    return (
      <header className="bg-white w-100 ph2 pv3 ph4-m ph5-l">
        <nav className="f7 fw6 ttu tracked bb">
          <div className="w-70 dib">
            <Link to="/d/">
              <img src={logo} className="dib w3 mh2" alt="Site Name" />
            </Link>
            <Route path="/d/" render={this.renderCategories} />
          </div>
          <div className="w-15 dib">
            <Link className="link dim black dib ml2" to="/cart/">
              <p>我的试衣间</p>
              <p> my fitting room</p>
            </Link>
            <a className="link dim black dib ml2" href="#" title="Contact">
              <p>退出</p>
              <p>sign out</p>
            </a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
