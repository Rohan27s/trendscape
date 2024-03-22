import React from 'react';
import StarRating from '../Utils/StarRating';
import Link from 'next/link'
const ProductCard = ({ name, brand, price, rating }) => {
    return (
        <Link href="#">
            <div className='w-[250px] h-[400px] cursor-pointer'>
                {/* Product Image */}
                <div className='bg-gray-300 rounded-2xl h-[250px] w-[250px]'>
                    <img
                        src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className='w-full h-full object-cover rounded-2xl'
                        loading='lazy'
                    />
                </div>

                {/* Product Name with Price */}
                <div className='flex flex-row mt-2'>
                    <span className='w-[70%]'>
                        <h3 className='font-bold text-lg overflow-hidden overflow-ellipsis'>{name}</h3>
                        <p className='text-sm'>{brand}</p>
                    </span>
                    <span className='w-[30%] flex justify-end font-bold '>
                        <p>Rs.{price}</p>
                    </span>
                </div>

                {/* Ratings */}
                <div>
                    <StarRating rating={rating} />
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
