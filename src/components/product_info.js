import React, { Component } from "react";
import { connect } from "react-redux";
import { selectors } from "../reducers/index";
import { addItemToCart } from "../actions/products";

class ProductInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
      size: "",
      color: ""
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };

  addToCart = item => {
    if (this.state.size.length > 0 && this.state.color.length > 0) {
      console.log(this.state);

      const payload = {
        id: item.id,
        color: this.state.color,
        size: this.state.size
      };

      this.props.onAddItemToCart(payload);

      this.props.closePopup();
    }
  };

  renderGallery() {
    const { item } = this.props;

    return (
      <div className="fl w-40 mr3">
        <div className="dib fl w-70">
          <img src={item.imageSrc} />
        </div>
        <div className="dib fl w-25 ml2">
          <img src={item.imageSrc} />
          <img src={item.imageSrc} />
          <img src={item.imageSrc} />
        </div>
      </div>
    );
  }

  renderSizes(item) {
    return (
      <div className="mv3">
        <p>尺寸/SIZE</p>
        <ul className="list pa0">
          {item.sizes.map(size => {
            return (
              <li
                className="dib mr2 tracked"
                onClick={() => this.setState({ size })}
              >
                {size}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  renderColors(item) {
    return (
      <div className="mv3">
        <p>颜色/COLOR</p>
        <ul className="list pa0">
          {item.colors.map(color => {
            return (
              <li
                className="dib mr2 tracked"
                onClick={() => this.setState({ color })}
              >
                {color}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  renderProductDetails() {
    const { item } = this.props;

    return (
      <div className="fl w-35">
        <header>
          <h3>{item.name}</h3>
          <h3>{item.price}</h3>
        </header>
        {this.renderSizes(item)}
        {this.renderColors(item)}
        <div className="mv3">
          <p>描述/DESCRIPTION</p>
          <p>{item.description}</p>
        </div>
        <div className="b--solid">
          <button onClick={() => this.addToCart(item)}>加入我的试衣间</button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <nav className="navigation pa4">
            <button onClick={this.props.closePopup}>返回上一页</button>
          </nav>
          <main>
            {this.renderGallery()}
            {this.renderProductDetails()}
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { getProductSelectors, getListSelectors } = selectors(state);
  const { getActiveItemId } = getListSelectors();
  const { getItemById } = getProductSelectors();

  const activeItemId = getActiveItemId();

  return {
    item: getItemById(activeItemId)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItemToCart: payload => dispatch(addItemToCart(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductInfo);
