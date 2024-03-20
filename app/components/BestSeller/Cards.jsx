import React from 'react'
import Image from 'next/image'

const Cards = ({ className, src,name,desc }) => {
    return (
        <div className={`${className} rounded-3xl flex flex-col hover:cursor-pointer `}>
            <img
                src={src}
                className='w-[100%] h-[100%]  object-cover rounded-3xl bg-gray-200 hover:scale-[1.025] transition-transform duration-300 ease-in-out'
            />
            <div className='px-2 pt-2'>
                <p className='font-semibold'>{name}</p>
                <h3 className='font-semibold text-2xl'>{desc}</h3>
            </div>
        </div>

    )
}

export default Cards