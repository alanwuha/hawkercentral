import React, { Component } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./themeContext";
import Thumb from "./Thumb";
// import { formatPrice } from '../../../services/util';

class PageCartProduct extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    removeProduct: PropTypes.func.isRequired,
    changeProductQuantity: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isMouseOver: false,
    };
  }

  handleMouseOver = () => {
    this.setState({ isMouseOver: true });
  };

  handleMouseOut = () => {
    this.setState({ isMouseOver: false });
  };

  handleOnIncrease = (index) => {
    this.context.addProduct(index);
  };

  handleOnDecrease = (index) => {
    this.context.removeProduct(index);
  };

  render() {
    // const { product, img} = this.state;

    const classes = ["shelf-item"];
    const menu = this.context.pageData.menu_combined;
    if (this.state.isMouseOver) {
      classes.push("shelf-item--mouseover");
    }

    return (
      <div className={classes.join(" ")}>
        <Thumb
          classes="shelf-item__thumb"
          src={this.props.img}
          alt={this.props.product.title}
        />
        <div className="shelf-item__details">
          <p className="title">{menu[this.props.product.index].name}</p>
          <p className="desc">Quantity: {this.props.product.quantity}</p>
        </div>
        <div className="shelf-item__price">
          <div>
            <button
              onClick={() => this.handleOnDecrease(this.props.product.index)}
              className="change-product-button"
            >
              -
            </button>
            <button
              onClick={() => this.handleOnIncrease(this.props.product.index)}
              className="change-product-button"
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}
PageCartProduct.contextType = CartContext;
export default PageCartProduct;
