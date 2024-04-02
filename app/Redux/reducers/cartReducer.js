// Redux cartReducer.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find((item) => item._id === product._id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ ...product, quantity });
      }
      state.total = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
      state.total = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    updateQuantity: (state, action) => {
      const { productId, newQuantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === productId);
      if (itemToUpdate) {
        itemToUpdate.quantity = newQuantity;
        state.total = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
