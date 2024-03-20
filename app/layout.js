import { Inter } from "next/font/google";
import "./globals.css";
import 'flowbite';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trendscape",
  description: "Ecommerce for all your need",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}

      <body className={inter.className}>{children}</body>
    </html>
  );
}
