import React, { Component } from "react";
import { connect } from "react-redux";
import { selectors } from "../reducers/index";

class ProductInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };

  render() {
    const { activeItem } = this.props;

    return (
      <div className="popup">
        <div className="popup_inner ">
          <div className="pa4">
            <button onClick={this.props.closePopup}>返回上一页</button>
            <div>
              <div className="fl w-40 mr3">
                <div className="dib fl w-70">
                  <img src={activeItem.imageSrc} />
                </div>
                <div className="dib fl w-25 ml2">
                  <img src={activeItem.imageSrc} />
                  <img src={activeItem.imageSrc} />
                  <img src={activeItem.imageSrc} />
                </div>
              </div>
              <div className="fl w-35">
                <div>
                  <h3>{activeItem.name}</h3>
                  <h3>310MOOD ${activeItem.price}</h3>
                </div>
                <div className="mv3">
                  尺寸/SIZE
                  <ul className="list pa0">
                    <li className="dib mr2 tracked">
                      <a href="#">XS</a>
                    </li>
                    <li className="dib mr2 tracked">
                      <a href="#">XS</a>
                    </li>
                  </ul>
                </div>
                <div className="mv3">
                  <div className="dib mr4">
                    颜色/COLOR
                    <ul className="list pa0">
                      <li className="dib mr2 tracked">
                        <a href="#">white</a>
                      </li>
                      <li className="dib mr2 tracked">
                        <a href="#">black</a>
                      </li>
                    </ul>
                  </div>
                  <div className="dib">
                    数量/QTY
                    <div className="div tc v-mid">
                      <button onClick={this.IncrementItem}>+</button>
                      <p className="dib">{this.state.clicks}</p>
                      <button onClick={this.DecreaseItem}>-</button>
                    </div>
                  </div>
                </div>

                <div className="mv3">
                  DESCRIPTION
                  <p>classic design</p>
                </div>
                <div className="b--solid tc mv5">
                  <button>加入我的试衣间</button>
                </div>
              </div>
            </div>
          </div>
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
    activeItem: getItemById(activeItemId)
  };
};

export default connect(mapStateToProps)(ProductInfo);
