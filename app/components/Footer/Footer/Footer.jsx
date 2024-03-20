import React from 'react'
import Logo from '../../Utils/Logo'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='flex flex-col mt-16 '>
      <div className='flex flex-row  py-4 w-[90%] mx-auto'>
        <div id="about" className='w-1/4 gap-3 flex flex-col justify-center'>
          <Logo className={'w-[200px] text-xl'}/>
          <p className=''>We sell quality products and our customer service are always active for you!</p>
          <span className='flex  flex-row gap-3 text-3xl'>
            <FaFacebook />
            <FaInstagramSquare />
          </span>
        </div>
        <div id="products" className='w-1/4 px-8 gap-6 flex justify-center flex-col'>
          <h2 className='font-bold '>Products</h2>
          <ul>
          <li>
              <Link href="#">
                All
              </Link>
            </li>
            <li>
              <Link href="#">
                Women
              </Link>
            </li>
            <li>
              <Link href="#">
                Men
              </Link>
            </li>
            <li>
              <Link href="#">
                Kids
              </Link>
            </li>
          </ul>
        </div>
        <div id="products" className='w-1/4 px-8 gap-6 flex justify-center flex-col'>
          <h2 className='font-bold '>Company</h2>
          <ul>
            <li>
              <Link href="#">
                About
              </Link>
            </li>
            <li>
              <Link href="#">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#">
                Press
              </Link>
            </li>
          </ul>
        </div>
        <div id="products" className='w-1/4 px-8 gap-6 flex justify-center flex-col'>
          <h2 className='font-bold '>Customer Service</h2>
          <ul>
          <li>
              <Link href="#">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="#">
                Store
              </Link>
            </li>
            <li>
              <Link href="#">
                Consultant
              </Link>
            </li>
            <li>
              <Link href="#">
                Search Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-100 flex justify-center p-2">
        <p>
          &copy; Rohan 2024
        </p>
      </div>
    </div>
  )
}

export default Footer