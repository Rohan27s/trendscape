"use client"
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

  
 
const ProductSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        accessibility: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        gutter: 3,
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 499,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='mt-6 mb-12'>
            <h2 className='text-3xl font-bold mb-3'>
                Trending Products
            </h2>
            <Slider {...settings} className=''>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                    <>
                        <ProductCard />
                    </>
                ))}
            </Slider>
        </div>
    )
}

export default ProductSlider