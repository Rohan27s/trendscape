import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link'
const OrderSuccessPage = () => {
  return (
    <div className="flex justify-center items-center min-h-[75vh] bg-gray-100">
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <div className="text-green-500 flex w-full justify-center text-5xl mb-4 text-center">
          <FaCheckCircle />
        </div>
        <h1 className="text-3xl font-semibold text-center text-green-500 mb-4">Order Successful!</h1>
        <p className="text-gray-700 mb-4 text-center">Thank you for your order.<br/> Your order  has been successfully placed.</p>
        <div className="text-center">
          <Link href={"/"} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">Continue shopping</Link>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccessPage;
