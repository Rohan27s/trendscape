"use client"
import React from 'react'
import Logo from '../Utils/Logo'
import { RiSearchLine } from "react-icons/ri";
import { CATEGORIES } from '@/app/Data/constants';
import Link from 'next/link'
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className='syne-font flex w-full items-center justify-between p-4'>       

          <form class="max-w-md mx-auto w-1/3  justify-start flex items-center gap-2">
            <RiSearchLine className='text-2xl'/>
            <input type="search" className='search_input !outline-none  border-none focus:ring-0' />
          </form>
        <Logo className={'w-1/3 text-3xl flex justify-center font-extrabold'}/>
        <span className='flex justify-end w-1/3 items-center gap-4 pr-4'>
        <AiOutlineShoppingCart className='text-3xl'/>

          {/* <img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="w-10 h-10 rounded-full cursor-pointer" src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User dropdown" /> */}

          {/* <span id="userDropdown" className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Bonnie Green</div>
            <div class="font-medium truncate">name@flowbite.com</div>
          </div>
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
          </ul>
          <div class="py-1">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </div>
        </span> */}
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

export default Navbar