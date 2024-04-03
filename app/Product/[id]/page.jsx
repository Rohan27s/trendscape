"use client"
import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import ColorOptions from '@/app/components/ColorOptions/ColorOptions';
import CustomerReview from '@/app/components/CustomerReview/CustomerReview';
import { useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, selectProduct } from '@/app/Redux/reducers/productSlice';
import { addToCart } from '@/app/Redux/reducers/cartReducer';
import ProductDetailsQuantitySelector from '@/app/components/Utils/ProductDetailsQuantitySelector';
import ImageSlider from '@/app/components/Utils/ImageSlider';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '@/app/components/Utils/Loading';

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);
  const [expanded, setExpanded] = useState(false);
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    if (product) {
      setExpanded(false);
    }
  }, [product]);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  if (!product) {
    return <div>
      <Loading/>
    </div>;
  }
  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity })); 
    toast.success(`${product.name} added to cart`, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div className="container mx-auto mt-10  ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Slider */}
        <div className="md:col-span-1 relative">
          <ImageSlider images={product?.images}/>
        </div>

        {/* Product Details */}
        <div className="md:col-span-1 w-[70%] mr-auto flex flex-col gap-4">
          <div className='flex flex-col'>
            <h2 className="text-3xl font-semibold ">{product?.name}</h2>
            <p className='text-xl font-light'>{product?.brand}</p>
          </div>
          <p className='text-2xl font-semibold'>Rs.{product?.price}</p> 

            <span className='flex'>
              <ProductDetailsQuantitySelector onQuantityChange={setQuantity} />
            </span>
          {/* Color Options */}
          <div className="flex flex-col mt-4">
            <label className="block text-gray-700 text-sm font-bold " htmlFor="color">
              Color
            </label>
            <ColorOptions colors={product?.colors} />
          </div>

          {/* Size Options */}
          <div className="flex flex-col mt-6">
            <label className="block text-gray-700 text-sm font-bold mt-4" htmlFor="size">
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

          <button onClick={handleAddToCart} className="bg-black justify-center flex rounded-xl flex-row items-center gap-4 hover:bg-gray-700 text-white font-bold py-2 px-12 ">
            <AiOutlineShoppingCart className='text-3xl' />
            Add to Cart
          </button>

          {/* Product Description */}
         <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Description</h3>
            <p className="text-gray-700">
              {expanded ? product.description : `${product.description?.slice(0, 100)}`}
            </p>
            {product.description?.length > 100 && (
              <button onClick={toggleExpanded} className="text-blue-500 hover:underline mt-2">
                {expanded ? 'View Less' : 'View More'}
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
