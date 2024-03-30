"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaShippingFast, FaMoneyBillAlt, FaPlaneDeparture } from 'react-icons/fa';
import { MdPayment } from "react-icons/md";



const CheckoutPage = () => {
    // Static data for order total, subtotal, and discount
    const [selectedShipping, setSelectedShipping] = useState(null);
    const [selectedPayment, setSelectedPayment] = useState(null);
    const cartItems = useSelector((state) => state.cart.items);
    const subtotal = useSelector((state) => state.cart.total);
    const discount = 100; // Example discount amount
    const orderTotal = subtotal - discount; // Example order total amount
    console.log(cartItems);
    return (
        <div className="flex justify-center mt-8 w-[90%] mx-auto">
            {/* Left Side */}
            <div className="w-1/2 p-5 flex flex-col">
                {/* Form for shipping address */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-3">Shipping Address</h2>
                    <div className="flex flex-wrap ">
                        <div className="w-full md:w-1/2 pr-2">
                            <input type="text" placeholder="Name" className="w-full border border-gray-400 p-2 rounded-md mb-3" />
                        </div>
                        <div className="w-full md:w-1/2 pl-2">
                            <input type="text" placeholder="Mobile Number" className="w-full border border-gray-400 p-2 rounded-md mb-3" />
                        </div>
                    </div>
                    <div>
                        <input type="text" placeholder="House Number / Street Name" className="w-full border border-gray-400 p-2 rounded-md mb-3" />
                    </div>
                    <div>
                        <input type="text" placeholder="City / Town" className="w-full border border-gray-400 p-2 rounded-md mb-3" />
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 pr-2">
                            <input type="text" placeholder="State" className="w-full border border-gray-400 p-2 rounded-md mb-3" />
                        </div>
                        <div className="w-full md:w-1/2 pl-2">
                            <input type="text" placeholder="Pincode" className="w-full border border-gray-400 p-2 rounded-md mb-3" />
                        </div>
                    </div>
                </div>

                {/* Shipping methods */}
                <div>
                    <h2 className="text-lg font-semibold mb-3">Shipping Method</h2>
                    {/* Option 1: Normal Shipping */}
                    <div
                        className={`border border-gray-400 p-3 mb-3 rounded-xl cursor-pointer ${selectedShipping === 'normal' ? 'bg-black text-white' : 'bg-white text-gray-600'
                            }`}
                        onClick={() => setSelectedShipping('normal')}
                    >
                        <span className="flex items-center gap-2">
                            <FaShippingFast /> Normal Shipping (5-7 days)
                        </span>
                    </div>
                    {/* Option 2: Express Shipping */}
                    <div
                        className={`border border-gray-400 p-3 rounded-xl cursor-pointer ${selectedShipping === 'express' ? 'bg-black text-white' : 'bg-white text-gray-600'
                            }`}
                        onClick={() => setSelectedShipping('express')}
                    >
                        <span className="flex items-center gap-2">
                            <FaPlaneDeparture /> Express Shipping (1-2 days)
                        </span>
                    </div>
                </div>

            </div>

            {/* Right Side */}
            <div className="w-[40%]  p-6 bg-neutral-900 rounded-3xl text-white flex flex-col h-auto items-start justify-center">
                {/* Ordered Items */}
                <h3 className='text-2xl mb-2'>Order Overview</h3>
                <div className='w-full flex products-custom-scroll'>
                    <ul className='flex flex-row w-full overflow-x-auto gap-4' style={{ scrollbarWidth: 'thin', scrollbarColor: 'gray', scrollbarTrackColor: 'transparent' }}>
                        {cartItems?.map((item) => (
                            <li key={item.id} className="w-[150px] flex flex-col items-center justify-between mb-2">
                                <span className="w-[150px] h-[150px] mb-[2px] flex">
                                    <img src={`https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} alt={item.name} className="w-full h-full object-cover rounded-xl" />
                                </span>
                                <span className="text-start mx-auto w-[98%] overflow-hidden">
                                    <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">{item.name}</p>
                                </span>

                                <span className="text-start w-full flex ">
                                    <p>Rs.{item.price} X {item.quantity}</p>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-6 mt-2 w-full">
                    <h2 className="text-lg font-semibold mb-3">Payment Details</h2>
                    <div className="flex justify-between">
                        <p className="">Subtotal:</p>
                        <p className="">Rs. {subtotal}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="">Discount:</p>
                        <p className="">- Rs. {discount}</p>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold">Total:</p>
                        <p className="text-lg font-semibold">Rs. {orderTotal}</p>
                    </div>
                </div>

                {/* Payment Method Selection */}
                <div className="mb-3 w-full">
                    <h2 className="text-lg font-semibold mb-3">Payment Method</h2>
                    {/* Option 1: Cash on Delivery (COD) */}
                    <div
                        className={`border border-gray-400  p-3 rounded-t-xl cursor-pointer ${selectedPayment === 'cod' ? 'bg-black text-white' : 'bg-white text-black'
                            }`}
                        onClick={() => setSelectedPayment('cod')}
                    >
                        <label className="inline-flex items-center">
                            {/* Hidden radio button */}
                            <input type="radio" className="form-radio sr-only" name="payment" value="cod" checked={selectedPayment === 'cod'} onChange={() => { }} />
                            {/* Icon and text */}
                            <span className="ml-2 flex items-center "><FaMoneyBillAlt className="mr-2 text-2xl" /> Cash on Delivery (COD)</span>
                        </label>
                    </div>
                    {/* Option 2: Online Payment */}
                    <div
                        className={`border border-gray-400 p-3 rounded-b-xl cursor-pointer ${selectedPayment === 'online' ? 'bg-black text-white' : 'bg-white text-black'
                            }`}
                        onClick={() => setSelectedPayment('online')}
                    >
                        <label className="inline-flex items-center">
                            {/* Hidden radio button */}
                            <input type="radio" className="form-radio sr-only" name="payment" value="online" checked={selectedPayment === 'online'} onChange={() => { }} />
                            {/* Icon and text */}
                            <span className="ml-2 flex items-center"><MdPayment className="mr-2 text-2xl" /> Online Payment</span>
                        </label>
                    </div>
                </div>
                {/* Complete Your Order Button */}
                <div className='flex w-full'>
                    <button className="bg-white w-full font-semibold text-black py-2 px-4 rounded-xl  hover:font-bold">Complete Your Order</button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
