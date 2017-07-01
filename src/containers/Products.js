import React, { Component } from 'react';
import { ProductList } from '../components';
import { getProducts, addToCart } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Products extends Component {

  componentDidMount() {
    this.props.getProducts();
  }

  handleAddToCartClick = (product) => {
    this.props.addToCart(product);
  }

  render() {
    return (
      <ProductList
      products={this.props.products}
      handleAddToCartClick={this.handleAddToCartClick}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.productList.products
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getProducts: getProducts,
    addToCart: addToCart,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
