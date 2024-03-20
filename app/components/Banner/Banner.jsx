import React from 'react'
import Link from 'next/link'
const Banner = ({imageSrc,link}) => {
    return (
        <div className='relative w-full my-6 rounded-3xl'>
            <img className='w-full max-h-[50vh] object-cover rounded-3xl bg-gray-200' src={imageSrc} alt="" />
            <div className='gap-2 rounded-3xl absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-40'>
                <h2 className='text-6xl font-bold text-white w-[70%]'>Get 10% OFF on all products!</h2>
                <Link href={link} className='rounded-3xl text-black text-xl font-semibold mt-2 bg-white px-6 py-2  hover:bg-black hover:text-white transition-colors duration-300'>
                    SHOP NOW
                </Link>
            </div>
        </div>


    )
}

export default Banner