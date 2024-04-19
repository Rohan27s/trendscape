"use client"
import React, { useEffect, useState } from 'react';
import Logo from '../Utils/Logo';
import { RiSearchLine } from 'react-icons/ri';
import { CATEGORIES } from '@/app/Data/constants';
import Link from 'next/link';
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineLogout } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { signOut } from '@/app/Redux/reducers/authSlice';

const Navbar = ({ openCart }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(signOut()); // Dispatch the signOut action
    toast.success('Logged out successfully!');
    router.push('/'); // Redirect to the home page after logout
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <div className="syne-font flex w-full items-center justify-between p-4">
        <form className="max-w-md mx-auto w-1/3  justify-start flex items-center gap-2">
          <RiSearchLine className="text-2xl" />
          <input type="search" className="search_input !outline-none  border-none focus:ring-0" />
        </form>
        <Logo className={'w-1/3 text-3xl flex justify-center font-extrabold'} />
        <span className="flex justify-end w-1/3 items-center gap-4 pr-4 relative">
          <AiOutlineShoppingCart className="text-3xl cursor-pointer" onClick={openCart} />
          {cartItemCount > 0 && (
            <span className="bg-black text-white rounded-full px-2 py-1 absolute top-0 right-0 -mt-2 mr-2 text-xs">
              {cartItemCount}
            </span>
          )}
        </span>
        {user ? (
          <div className="relative">
            <button
              className="mx-2 font-bold flex items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <AiOutlineUser className="mr-1 font-bold text-2xl" />
              {user}
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 bg-white shadow-lg border-2 border-slate-800 rounded-md mt-1">
                <button
                  onClick={handleLogout}
                  className=" w-full px-4 py-2 text-sm rounded-md text-gray-800 hover:bg-gray-200 flex items-center"
                >
                  <AiOutlineLogout className="mr-2 font-bold text-xl" />
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/login" className="mx-2 font-bold flex items-center">
            <AiOutlineUser className="mr-1 font-bold text-2xl" />
            Login
          </Link>
        )}
      </div>
      <div className="flex flex-wrap font-semibold items-center justify-around list-none custom-border  py-3">
        {CATEGORIES?.map((item) => (
          <Link href={item.url} key={item._id} className="syne-font">
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
