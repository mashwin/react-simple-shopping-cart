import React, { Component } from 'react';
import { CartList } from '../components';
import { connect } from 'react-redux';

class Cart extends Component {
  render() {
    return (
      <CartList
      cartList={this.props.cart}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartList.cart,
  }
}

export default connect(mapStateToProps, null)(Cart);
