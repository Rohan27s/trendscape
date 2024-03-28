// CartQuantitySelector.jsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity } from '@/app/Redux/reducers/cartReducer';

const CartQuantitySelector = ({ productId, quantity }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateQuantity({ productId, newQuantity: quantity + 1 }));
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch(updateQuantity({ productId, newQuantity: quantity - 1 }));
    }
  };

  return (
    <div className="flex border border-gray-300 rounded overflow-hidden">
      <button className="px-3 py-1 bg-gray-200" onClick={handleDecrease}>-</button>
      <span className="px-3 py-1">{quantity}</span>
      <button className="px-3 py-1 bg-gray-200" onClick={handleIncrease}>+</button>
    </div>
  );
};

export default CartQuantitySelector;
