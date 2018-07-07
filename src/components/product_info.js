import React, { Component } from "react";
import { connect } from "react-redux";
import { rootSelectors as selectors } from "../reducers/index";

class ProductInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activeItem } = this.props;

    return (
      <div className="popup">
        <div className="popup_inner ">
          <button onClick={this.props.closePopup}>返回上一页</button>
          <div>
            <div>
              <img src={activeItem.imageSrc} />
            </div>
            <div>
              <h1>{activeItem.name}</h1>
            </div>
            <div />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { getProductSelectors } = selectors(state);

  return {
    activeItem: getProductSelectors().getActiveItem()
  };
};

export default connect(mapStateToProps)(ProductInfo);
