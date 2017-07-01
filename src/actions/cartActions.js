import { ADD_TO_CART } from '../constants';

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product
  }
}
