import { combineReducers } from 'redux';

//IMPORT REDUCERS
import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReducer';

//HERE COMBINE THE REDUCERS
export default combineReducers({
  productList: productsReducer,
  cartList: cartReducer,
})
