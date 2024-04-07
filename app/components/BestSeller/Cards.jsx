import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Cards = ({ _id,className, src,name,desc }) => {
    return (
        <Link href={`/Product/${name.replace(/\s+/g, '-').toLowerCase()}?id=${_id}`} className={`${className} rounded-3xl flex flex-col hover:cursor-pointer `}>
            <img
                src={src}
                className='w-[100%] h-[100%]  object-cover rounded-3xl bg-gray-200 hover:scale-[1.025] transition-transform duration-300 ease-in-out'
            />
            <div className='px-2 pt-2'>
                <p className='font-semibold capitalize'>{name}</p>
                <h3 className='font-semibold text-2xl'>{desc}</h3>
            </div>
        </Link>

    )
}

export default Cards