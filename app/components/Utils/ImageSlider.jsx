import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing arrow icons

const ImageSlider = ({ images }) => {
  // const uniqueImages = [...new Set(images)];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: images?.length > 1 ? <NextArrow /> : null,
    prevArrow: images?.length > 1 ? <PrevArrow /> : null,
  };

  return (
    <>
      {images?.length > 1 &&
        <Slider {...settings} className='w-[80%] mx-auto'>
          {images.map((item, index) => (
            <div key={index} className='h-[75vh]'>
              <img src={item} alt="Product" className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </Slider>}
      {(images?.length === 1) &&
        <div key={images[0]} className='h-[75vh] w-[80%] mx-auto'>
          <img src={images[0]} alt="Product" className="w-full h-full object-cover rounded-lg" />
        </div>
      }
    </>
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
