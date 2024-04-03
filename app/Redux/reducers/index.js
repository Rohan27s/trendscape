import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import productReducer from './productSlice';
import orderReducer from './orderSlice'
const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer, 
  order:orderReducer
});

export default rootReducer;
