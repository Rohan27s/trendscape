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
import {store}  from './Redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './Redux/store';
import AnnouncementBar from './components/AnnouncementBar/AnnouncementBar';
import { BRAND_NAME } from './Data/constants';

const inter = Inter({ subsets: ["latin"] });

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
console.log(store,'store')
console.log(persistor,'stoe')
  return (
      <html lang="en">
        <head>
          <title>{BRAND_NAME}</title>
        </head>
        <body className={inter.className}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <ToastContainer
            position="top-center"
            autoClose={3000} // Close the notification after 3 seconds
            hideProgressBar={false} // Show the progress bar
            newestOnTop={false} // Place newest notifications on top
            closeOnClick // Close the notification when clicked
            rtl={false} // Left-to-right layout
            pauseOnFocusLoss // Pause the notification when focus is lost on the window
            draggable // Allow dragging to dismiss the notification
            pauseOnHover
            bodyStyle={{
              padding: '8px',
            }}
          />
          <AnnouncementBar />
          <Navbar openCart={openCart} />
          {isCartOpen && <Cart onClose={closeCart} />}
          <div className="mx-auto flex flex-col  relative min-h-[70vh]">
            {children}
          </div>
          <Footer />
      </PersistGate>
    </Provider>
        </body>
      </html>
  );
}
