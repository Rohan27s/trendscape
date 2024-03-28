// ImageSlider.jsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing arrow icons

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings} className='w-[80%] mx-auto'>
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <div key={index} className='h-[75vh]'>
          <img src={`https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} alt="Product" className="w-full h-full object-cover rounded-lg" />
        </div>
      ))}
    </Slider>
  );
};

// Custom Next Arrow Component
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaChevronRight className="text-4xl text-gray-500" />
    </div>
  );
};

// Custom Prev Arrow Component
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaChevronLeft className="text-4xl text-gray-500 mr-2" />
    </div>
  );
};

export default ImageSlider;
