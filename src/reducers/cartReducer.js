import { ADD_TO_CART } from '../constants.js'

export function cartReducer(state = {
    cart: []
  }, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cart: [...state.cart, action.payload]
      }
      break;
    default:
  }
  return state;
}
