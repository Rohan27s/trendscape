import React from 'react';
import StarRating from '../Utils/StarRating';
import Link from 'next/link'
const ProductCard = ({ name, brand, price, rating,_id,images }) => {
    return (
        <Link href={`/Product/${name.replace(/\s+/g, '-').toLowerCase()}?id=${_id}`}>
            <div className='w-[250px] h-[400px] cursor-pointer'>
                {/* Product Image */}
                <div className='bg-gray-300 rounded-2xl h-[250px] w-[250px]'>
                    <img
                        src={images[0]}
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
