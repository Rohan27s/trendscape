"use client"
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import ColorOptions from '@/app/components/ColorOptions/ColorOptions';
import CustomerReview from '@/app/components/CustomerReview/CustomerReview';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Slider {...settings} className='w-[80%] mx-auto'>
      {
        [1, 2, 3, 4, 5, 6].map(() => (
          <div className='h-[75vh]'>
            <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product" className="w-full h-full object-cover rounded-lg" />
          </div>
        ))
      }
    </Slider>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button className={`${className} absolute top-1/2 left-2 z-10 transform -translate-y-1/2`} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button className={`${className} absolute top-1/2 right-2 z-10 transform -translate-y-1/2`} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
};

const ProductDetailsPage = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const description =
    "Introducing our premium White Cotton Sweatshirt, the epitome of comfort and style. Crafted from high-quality cotton fabric, this sweatshirt offers a luxurious feel against the skin, ensuring ultimate comfort throughout the day. Designed with both fashion and functionality in mind, our white sweatshirt features a classic crew neckline and ribbed cuffs and hem for a snug and secure fit. Its timeless design makes it a versatile addition to any wardrobe, seamlessly transitioning from casual outings to lounging at home with ease. The minimalist aesthetic of the white sweatshirt serves as a blank canvas for effortless styling. Whether paired with jeans for a laid-back look or layered under a jacket for added warmth, its neutral hue complements any outfit and allows for endless versatility in styling. Crafted with meticulous attention to detail, our sweatshirt is built to withstand the test of time. Its durable construction ensures long-lasting wear, while the breathable fabric ensures optimal comfort in any season. Embrace comfort without compromising on style with our White Cotton Sweatshirt. Elevate your wardrobe essentials with this timeless piece that effortlessly combines comfort, versatility, and understated elegance.";

  const truncatedDescription = expanded ? description : description.slice(0, 300) + '...';

  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Slider */}
        <div className="md:col-span-1 relative">
          <ImageSlider />
        </div>

        {/* Product Details */}
        <div className="md:col-span-1 w-[80%] mr-auto">
          <div className='flex flex-col mb-8'>
            <h2 className="text-3xl font-semibold ">White Swearshirt</h2>
            <p className='text-xl font-light'>ZARA</p>

          </div>
          {/* Color Options */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold " htmlFor="color">
              Color
            </label>
            <ColorOptions />
          </div>


          {/* Size Options */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="size">
              Size
            </label>
            <select id="size" className="w-full border border-gray-300 rounded px-3 py-2">
              {/* Your size options go here */}
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-black  flex rounded-xl flex-row items-center gap-4 hover:bg-gray-700 text-white font-bold py-2 px-12 ">
            <AiOutlineShoppingCart className='text-3xl' />
            Add to Cart
          </button>

          {/* Product Description */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Description</h3>
            <p className="text-gray-700">{truncatedDescription}</p>
            {!expanded && (
              <button onClick={toggleExpanded} className="text-blue-500 hover:underline mt-2">
                View More
              </button>
            )}
          </div>
        </div>
      </div>
      <section className='flex flex-col justify-center w-[90%] mx-auto'>
        <CustomerReview/>
      </section>
    </div>
  );
};

export default ProductDetailsPage;
