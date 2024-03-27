import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart: state => {
      state.isOpen = true;
    },
    closeCart: state => {
      state.isOpen = false;
    },
  },
});

export const { openCart, closeCart } = cartSlice.actions;

export default cartSlice.reducer;
