import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import authReducer from './authSlice';
import productReducer from './productSlice';
import orderReducer from './orderSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  product: productReducer,
  order: orderReducer,
});

export default rootReducer;
