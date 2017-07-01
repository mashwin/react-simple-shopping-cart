import { GET_PRODUCTS } from '../constants';

export function productsReducer(state = {
    products: [
      {
        id: 1,
        title: 'Laptop',
        url: 'https://unsplash.it/242/200?image=1'
      },
      {
        id: 2,
        title: 'Camera',
        url: 'https://unsplash.it/242/200?image=2'
      },
      {
        id: 3,
        title: 'Mobile',
        url: 'https://unsplash.it/242/200?image=3'
      },
    ]
  }, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: [...state.products]
      };
      break;
    default:
  }

  return state;
}
