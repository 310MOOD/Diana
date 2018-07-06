import React, { Component } from "react";
import logo from "../img/logo.png";

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header className="bg-white w-100 ph2 pv3 ph4-m ph5-l">
        <nav className="f7 fw6 ttu tracked bb">
          <div className="w-70 dib">
            <img src={logo} className="dib w3 mh2" alt="Site Name" />
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
          <div className="w-15 dib">
            <a className="link dim black dib ml2" href="#" title="Contact">
              <p>我的试衣间</p>
              <p> my fitting room</p>
            </a>
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
