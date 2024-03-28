"use client"
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import ColorOptions from '@/app/components/ColorOptions/ColorOptions';
import CustomerReview from '@/app/components/CustomerReview/CustomerReview';
import QuantitySelector from '@/app/components/Utils/CartQuantitySelector';
import { useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, selectProduct } from '@/app/Redux/reducers/productSlice';
import { addToCart } from '@/app/Redux/reducers/cartReducer';
import ProductDetailsQuantitySelector from '@/app/components/Utils/ProductDetailsQuantitySelector';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);
  const [expanded, setExpanded] = useState(false);
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');
  const [quantity, setQuantity] = useState(1);
  // console.log("ID", productId);
  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    if (product) {
      setExpanded(false); // Reset expanded state when product changes
    }
  }, [product]);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  if (!product) {
    return <div>Loading...</div>;
  }
  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity })); // Dispatch addToCart action with product and quantity
  };
  // console.log(product);
  // console.log("Product is not null, rendering product details");

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
            <h2 className="text-3xl font-semibold ">{product?.name}</h2>
            <p className='text-xl font-light'>{product?.brand}</p>
          </div>
          {/* Color Options */}
          <div className="mb-4">
            <span className=' flex mb-4'>
            <ProductDetailsQuantitySelector onQuantityChange={setQuantity} />
            </span>
            <label className="block text-gray-700 text-sm font-bold " htmlFor="color">
              Color
            </label>
            <ColorOptions colors={product.colors} />
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
          <button onClick={handleAddToCart} className="bg-black  flex rounded-xl flex-row items-center gap-4 hover:bg-gray-700 text-white font-bold py-2 px-12 ">
            <AiOutlineShoppingCart className='text-3xl' />
            Add to Cart
          </button>

          {/* Product Description */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Description</h3>
            <p className="text-gray-700">{product.description}</p>
            {!expanded && (
              <button onClick={toggleExpanded} className="text-blue-500 hover:underline mt-2">
                View More
              </button>
            )}
          </div>
        </div>
      </div>
      <section className='flex flex-col justify-center w-[90%] mx-auto'>
        <CustomerReview />
      </section>
    </div>
  );
};

export default ProductDetailsPage;
