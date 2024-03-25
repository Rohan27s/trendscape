import React from 'react';
import Logo from '../Utils/Logo'
import { RiSearchLine } from "react-icons/ri";
import { CATEGORIES } from '@/app/Data/constants';
import Link from 'next/link'
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = ({ openCart }) => {
  return (
    <>
      <div className='syne-font flex w-full items-center justify-between p-4'>       
          <form className="max-w-md mx-auto w-1/3  justify-start flex items-center gap-2">
            <RiSearchLine className='text-2xl'/>
            <input type="search" className='search_input !outline-none  border-none focus:ring-0' />
          </form>
        <Logo className={'w-1/3 text-3xl flex justify-center font-extrabold'}/>
        <span className='flex justify-end w-1/3 items-center gap-4 pr-4'>
          <AiOutlineShoppingCart className='text-3xl cursor-pointer' onClick={openCart} />
        </span>
      </div>
      <div className='flex flex-wrap font-semibold items-center justify-around list-none custom-border  py-3'>
        {CATEGORIES?.map((item) => (
          <>
            <Link href={item.url} className='syne-font'>
              {item.name}
            </Link>
          </>
        ))}
      </div>
    </>
  )
}

export default Navbar;
