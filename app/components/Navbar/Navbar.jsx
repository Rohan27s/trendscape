import React from 'react';
import Logo from '../Utils/Logo'
import { RiSearchLine } from "react-icons/ri";
import { CATEGORIES } from '@/app/Data/constants';
import Link from 'next/link'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from 'react-redux';
const Navbar = ({ openCart }) => {
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total number of items in the cart
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      <div className='syne-font flex w-full items-center justify-between p-4'>
        <form className="max-w-md mx-auto w-1/3  justify-start flex items-center gap-2">
          <RiSearchLine className='text-2xl' />
          <input type="search" className='search_input !outline-none  border-none focus:ring-0' />
        </form>
        <Logo className={'w-1/3 text-3xl flex justify-center font-extrabold'} />
        <span className='flex justify-end w-1/3 items-center gap-4 pr-4 relative'>
          <AiOutlineShoppingCart className='text-3xl cursor-pointer' onClick={openCart} />
          {cartItemCount > 0 && (
            <span className="bg-black text-white rounded-full px-2 py-1 absolute top-0 right-0 -mt-2 mr-2 text-xs">{cartItemCount}</span>
          )} 
        </span>
      </div>
      <div className='flex flex-wrap font-semibold items-center justify-around list-none custom-border  py-3'>
        {CATEGORIES?.map((item,index) => (
          <>
            <Link href={item.url} key={index} className='syne-font'>
              {item.name}
            </Link>
          </>
        ))}
      </div>
    </>
  )
}

export default Navbar;
