import { Inter } from "next/font/google";
import "./globals.css";
import 'flowbite';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trendscape",
  description: "Ecommerce for all your need",
};

export default function RootLayout({ children }) {
  // toast("Hello coders it was easy!");
  return (
    <html lang="en">
      {/* <ToastContainer /> */}

      <body className={inter.className}>
        <ToastContainer />

        <Navbar />
        <div className="mx-auto flex flex-col  relative min-h-[70vh]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
