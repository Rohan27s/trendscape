"use client"
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { fetchProducts, selectProducts, selectProductsStatus } from '../../Redux/reducers/productSlice';
import Loader from '../Utils/Loader';

const ProductSlider = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const status = useSelector(selectProductsStatus);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    const settings = {
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
    const renderSliderContent = () => {
        if (status === 'loading') {
            return <Loader />;
        } else if (status === 'failed') {
            return <p>Failed to load products.</p>;
        } else {
            return (
                <Slider {...settings} className=''>
                    {products?.slice(0, 10).map((product) => (
                        <ProductCard key={product._id} {...product} />
                    ))}
                </Slider>
            );
        }
    };

    

    return (
        <div className='mt-6 mb-12'>
            <h2 className='text-3xl font-bold mb-3'>
                Trending Products
            </h2>
            {renderSliderContent()}
        </div>
    );
}

export default ProductSlider;
