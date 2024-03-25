"use client"
import React, { useState } from 'react';

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
      <div className="flexborder border-gray-300 rounded overflow-hidden">
        <button className="px-3 py-1 bg-gray-200" onClick={handleDecrease}>-</button>
        <span className="px-3 py-1">{quantity}</span>
        <button className="px-3 py-1 bg-gray-200" onClick={handleIncrease}>+</button>
      </div>
  );
};

export default QuantitySelector;
