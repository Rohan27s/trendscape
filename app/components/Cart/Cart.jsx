import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import ProgressBar from './components/ProgressBar.jsx/ProgressBar';
import QuantitySelector from '../Utils/QuantitySelector';
import { MdDelete } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cart = ({ onClose }) => {
    const handleCartContentClick = (event) => {
        // Stop propagation to prevent the click event from reaching the overlay
        event.stopPropagation();
    };
    const [total, setTotal] = useState(3784)

    // Sample data for product recommendations
    const recommendedProducts = [
        {
            id: 1,
            name: "Product 1",
            image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: 100
        },
        {
            id: 2,
            name: "Product 2",
            image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: 120
        },
        {
            id: 3,
            name: "Product 3",
            image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: 150
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='cart-overlay' onClick={onClose}>
            <div className='cart' onClick={handleCartContentClick}>
                <div className='w-full flex justify-end text-xl'>
                    <span onClick={onClose} className='cursor-pointer'><AiOutlineClose /></span>
                </div>
                <ProgressBar totalAmount={total} />
                <div className="cart-items mt-4">
                    <ul>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                            <>
                                <li className='flex flex-row items-center justify-between gap-2'>
                                    <span className='w-1/4 h-[80px] flex'>
                                        <img
                                            src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt=""
                                            className='w-full h-full object-cover rounded-xl'
                                        />
                                    </span>
                                    <span className='flex h-full w-2/4 items-start flex-col'>
                                        <p>Sweatshirt</p>
                                        <QuantitySelector />

                                    </span>
                                    <span className='w-1/4 h-full flex justify-end gap-4 text-lg'>
                                        <p>Rs.344</p>
                                        <p><MdDelete className='text-2xl' /></p>
                                    </span>
                                </li>
                                <hr className='border border-b border-gray-100 my-2' />
                            </>
                        ))}
                    </ul>
                </div>
                {/* <div className="cart_recom m-auto flex h-[70%] flex-col justify-center w-full">
                    <h3 className="text-lg font-semibold mb-2 text-center">People also loved</h3>
                    <Slider {...settings} className=''>
                        {recommendedProducts.map((product) => (
                            <div key={product.id} className='!flex justify-center flex-col w-full mx-auto' >
                                <span className='w-[70%] h-[80%] flex justify-center mx-auto'>
                                <img src={product.image} className='w-full h-full object-contain' alt={product.name} />

                                </span>
                                <p className='text-center'>{product.name}</p>
                                <p className='text-center'>Rs. {product.price}</p>
                            </div>
                        ))}
                    </Slider>
                </div> */}
                <div className="cart-bottombar  flex flex-col justify-end w-full px-4 py-4 gap-2">
                    <div className="w-full flex justify-between items-center">
                        <input type="text" placeholder="Apply Discount Code" className="border border-gray-300 rounded-md px-3 py-1 w-1/2" />
                        <button className='w-1/2 h-full bg-black text-white px-4 py-1 rounded-md'>
                            Apply
                        </button>
                    </div>
                    <button className='w-full py-2 text-lg flex justify-center items-center  bg-black text-white'>
                        Checkout - Rs.{total}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
