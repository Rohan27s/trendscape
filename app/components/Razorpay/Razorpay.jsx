// 'use client'
// import React from 'react'
// import { MdPayment } from 'react-icons/md';

// const Razorpay = ({selectedPayment}) => {

//     const initializeRazorpay = () => {
//         return new Promise((resolve) => {
//             const script = document.createElement("script");
//             script.src = "https://checkout.razorpay.com/v1/checkout.js";

//             script.onload = () => {
//                 resolve(true);
//             };
//             script.onerror = () => {
//                 resolve(false);
//             };

//             document.body.appendChild(script);
//         });
//     };

//     const handlePayment = async () => {
//         const res = await initializeRazorpay();

//         if (!res) {
//             alert("Razorpay SDK Failed to load");
//             return;
//         }

//         // Make API call to the serverless API
//         const data = await fetch("http://localhost:3700/api/payment/checkout", { method: "POST" }).then((t) =>
//             t.json()
//         );
//         console.log(data);
//         var options = {
//             key: process.env.NEXT_PUBLIC_APP_RAZORPAY_API_KEY, // Enter the Key ID generated from the Dashboard
//             name: "Manu Arora Pvt Ltd",
//             currency: data.currency,
//             amount: data.amount,
//             order_id: data.id,
//             description: "Thankyou for your test donation",
//             image: "https://manuarora.in/logo.png",
//             handler: async function (response) {
//                 const body = {
//                     ...response,
//                 };
//                 const validate = await fetch("http://localhost:3700/api/payment/paymentVerification", {
//                     method: "POST", body: JSON.stringify(body),
//                     headers: {
//                         "Content-Type": "application/json"
//                     }
//                 })
//                 const jsonres = await validate.json();
//                 console.log(jsonres, 'jsonres')
//             },
//             prefill: {
//                 name: "Manu Arora",
//                 email: "manuarorawork@gmail.com",
//                 contact: "9999999999",
//             },
//         };

//         const paymentObject = new window.Razorpay(options);
//         paymentObject.open();

//     }
//     return (
//         <div>
//             <button onClick={handlePayment}>
//                 <label className="inline-flex items-center">
//                     {/* Hidden radio button */}
//                     <input type="radio" className="form-radio sr-only" name="payment" value="online" checked={selectedPayment === 'online'} />
//                     {/* Icon and text */}
//                     <span className="ml-2 flex items-center"><MdPayment className="mr-2 text-2xl" /> Online Payment</span>
//                 </label>
//             </button>
//         </div>
//     )
// }

// export default Razorpay