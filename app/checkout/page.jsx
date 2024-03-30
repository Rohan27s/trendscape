"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaShippingFast, FaMoneyBillAlt, FaPlaneDeparture } from 'react-icons/fa';


const CheckoutPage = () => {
    // Static data for order total, subtotal, and discount
    const [selectedShipping, setSelectedShipping] = useState(null);
    const cartItems = useSelector((state) => state.cart.items);

    const subtotal = 1000; // Example subtotal amount
    const discount = 100; // Example discount amount
    const orderTotal = subtotal - discount; // Example order total amount

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
                        className={`border border-gray-400 p-3 mb-3 cursor-pointer ${selectedShipping === 'normal' ? 'bg-black text-white' : 'bg-white text-gray-600'
                            }`}
                        onClick={() => setSelectedShipping('normal')}
                    >
                        <span className="flex items-center gap-2">
                            <FaShippingFast /> Normal Shipping (5-7 days)
                        </span>
                    </div>
                    {/* Option 2: Express Shipping */}
                    <div
                        className={`border border-gray-400 p-3 cursor-pointer ${selectedShipping === 'express' ? 'bg-black text-white' : 'bg-white text-gray-600'
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
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
                            <li key={index} className="flex flex-col items-center justify-between mb-2">
                                <span className="w-[150px] h-[150px] flex">
                                    <img src={`https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} alt="" className="w-full h-full object-cover rounded-xl" />
                                </span>
                                <span className="text-start w-full">
                                    <p>Tshirt</p>
                                </span>
                                <span className="text-start w-full flex ">
                                    <p>Rs.200 X 2</p>
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
                <div className='mb-3 w-full'>
                    <h2 className="text-lg font-semibold mb-3">Payment Method</h2>
                    <label className="inline-flex items-center">
                        <input type="radio" className="form-radio " name="payment" value="cod" />
                        <span className="ml-2"><FaMoneyBillAlt /> Cash on Delivery (COD)</span> {/* Using FaMoneyBillAlt icon */}
                    </label>
                    <br />
                    <label className="inline-flex items-center">
                        <input type="radio" className="form-radio" name="payment" value="online" />
                        <span className="ml-2"><FaMoneyBillAlt /> Online Payment</span> {/* Using FaMoneyBillAlt icon */}
                    </label>
                </div>

                {/* Complete Your Order Button */}
                <div className='flex w-full'>
                    <button className="bg-white w-full font-semibold text-black py-2 px-4 rounded-3xl hover:bg-gray-200">Complete Your Order</button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
