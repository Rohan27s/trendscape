// Cart.jsx

import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '@/app/Redux/reducers/cartReducer';
import QuantitySelector from '../Utils/CartQuantitySelector';
import { MdDelete } from 'react-icons/md';
import ProgressBar from './components/ProgressBar.jsx/ProgressBar'; // Import ProgressBar
import CartQuantitySelector from '../Utils/CartQuantitySelector';
import Link from 'next/link'
const Cart = ({ onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const handleCartContentClick = (event) => {
    event.stopPropagation();
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    // Implement logic to update quantity in Redux store
  };

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart" onClick={handleCartContentClick}>
        <div className="w-full flex justify-end text-xl">
          <span onClick={onClose} className="cursor-pointer">
            <AiOutlineClose />
          </span>
        </div>
        <ProgressBar totalAmount={total} /> {/* Progress bar */}
        <div className="cart-items mt-4">
          {cartItems.length === 0 ? (
            <div className='flex w-full h-[65vh] justify-center items-center'>

              <p className="text-center text-xl font-semibold">Your cart is empty</p>
            </div>
          ) :
          <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex flex-row items-center justify-between gap-2 mb-2">
                <span className="w-1/4 h-[80px] flex">
                  <img src={item.images[0]} alt="" className="w-full h-full object-cover rounded-xl" />
                </span>
                <span className="flex h-full w-2/4 items-start flex-col">
                  <p>{item.name}</p>
                  <CartQuantitySelector productId={item.id} quantity={item.quantity} />
                </span>
                <span className="w-1/4 h-full flex justify-end gap-4 text-lg">
                  <p>Rs.{item.price * item.quantity}</p>
                  <p onClick={() => handleRemoveItem(item.id)}>
                    <MdDelete className="text-2xl cursor-pointer" />
                  </p>
                </span>
              </li>
            ))}
          </ul>
          </>
          }
        </div>
        {cartItems.length !== 0 && <div className="cart-bottombar flex flex-col justify-end w-full px-4 py-4 gap-2">
          <div className="w-full flex justify-between items-center">
            <input
              type="text"
              placeholder="Apply Discount Code"
              className="border border-gray-300 rounded-md px-3 py-1 w-1/2"
            />
            <button className="w-1/2 h-full bg-black text-white px-4 py-1 rounded-md">Apply</button>
          </div>
          <Link href="/checkout" onClick={onClose} className="w-full rounded-xl py-2 text-lg flex justify-center items-center bg-black text-white">
            Checkout - Rs.{total}
          </Link>
        </div>}
      </div>
    </div>
  );
};

export default Cart;
