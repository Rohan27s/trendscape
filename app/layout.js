"use client"
import { useState } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import 'flowbite';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer/Footer";
import Cart from "./components/Cart/Cart";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Trendscape",
//   description: "Ecommerce for all your need",
// };

export default function RootLayout({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
    document.body.style.overflow = 'hidden'; 
  };
  
  const closeCart = () => {
    document.body.style.overflow = '';
    setIsCartOpen(false);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />

        <Navbar openCart={openCart} />
        {isCartOpen && <Cart onClose={closeCart} />}
        <div className="mx-auto flex flex-col  relative min-h-[70vh]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
