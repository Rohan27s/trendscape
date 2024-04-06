"use client"
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import { fetchProducts, selectProducts, selectProductsStatus } from '../Redux/reducers/productSlice';
import { useSelector, useDispatch } from 'react-redux';

const Page = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [products, setProducts] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef();
    const dispatch = useDispatch();
    const productsArray = useSelector(selectProducts);
    const status = useSelector(selectProductsStatus);

    const filteredProducts = useMemo(() => {
        // Filter products based on search term and selected brands
        let filteredProducts = productsArray?.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (selectedBrands.length > 0) {
            filteredProducts = filteredProducts.filter(product => selectedBrands.includes(product.brand));
        }
        return filteredProducts;
    }, [productsArray, searchTerm, selectedBrands]);

    useEffect(() => {
        // Sort filtered products based on selected sorting option
        let sortedProducts = [...filteredProducts];
        if (sortBy === 'priceLowToHigh') {
            sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'priceHighToLow') {
            sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'ratingHighToLow') {
            sortedProducts = sortedProducts.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === 'ratingLowToHigh') {
            sortedProducts = sortedProducts.sort((a, b) => a.rating - b.rating);
        }

        // Set the final products state
        setProducts(sortedProducts);
    }, [filteredProducts, sortBy]);

    useEffect(() => {
        // Load more products when hasMore changes
        if (hasMore) {
            const sliceEnd = products.length + 30;
            setProducts(prevProducts => {
                const additionalProducts = productsArray?.slice(prevProducts.length, sliceEnd);
                return [...prevProducts, ...additionalProducts];
            });

            // Update hasMore based on whether all products have been loaded
            if (sliceEnd >= productsArray?.length) {
                setHasMore(false);
            }
        }
    }, [hasMore, products, productsArray]);

    const lastProductRef = useCallback(node => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setHasMore(true);
            }
        });
        if (node) observer.current.observe(node);
    }, [hasMore]);

    const handleBrandFilter = brand => {
        setSelectedBrands(prevSelectedBrands => {
            if (prevSelectedBrands.includes(brand)) {
                return prevSelectedBrands.filter(item => item !== brand);
            } else {
                return [...prevSelectedBrands, brand];
            }
        });
    };

    const uniqueBrands = [...new Set(productsArray?.map(product => product.brand))];

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className='flex flex-row'>
            {/* Filter Sidebar */}
            <div className='w-1/5 sticky top-0 bg-gray-200 p-4 overflow-y-auto custom-scrollbar' style={{ maxHeight: 'calc(100vh)' }}>
                <h2 className='text-lg font-semibold mb-4'>Filter By Brand</h2>
                <ul>
                    {uniqueBrands.map(brand => (
                        <li key={brand} className='flex items-center mb-2'>
                            <input
                                type='checkbox'
                                id={brand}
                                value={brand}
                                checked={selectedBrands.includes(brand)}
                                onChange={() => handleBrandFilter(brand)}
                                className='mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                            />
                            <label htmlFor={brand} className='text-sm'>{brand}</label>
                        </li>
                    ))}
                </ul>
            </div>


            {/* All Products */}
            <div className='py-4 w-[80%] flex flex-col'>
                <div className='flex justify-between flex-row items-center border border-b-gray-300 border-t-0 border-r-0 border-l-0 pb-3 px-4'>
                    <input
                        type='text'
                        placeholder='Search your products...'
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className='ml-4 px-3 w-[70%] py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                    />
                    <div className='w-[30%] flex justify-end items-center'>
                        <span className='font-semibold'>Sort by:</span>
                        <select
                            value={sortBy}
                            onChange={e => setSortBy(e.target.value)}
                            className='ml-2 px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                        >
                            <option value=''>Select</option>
                            <option value='priceLowToHigh'>Price: Low to High</option>
                            <option value='priceHighToLow'>Price: High to Low</option>
                            <option value='ratingHighToLow'>Rating: High to Low</option>
                            <option value='ratingLowToHigh'>Rating: Low to High</option>
                        </select>
                    </div>
                </div>
                {products.length === 0 ? (
                    <div className="text-center mt-8">
                        <p className="text-gray-500 text-lg">No products found for your search.</p>
                    </div>
                ) : (
                    <div className='flex flex-wrap items-center justify-center py-6 gap-4'>
                        {products.map((product, index) => (
                            <div key={product.id} ref={index === products.length - 1 ? lastProductRef : null}>
                                <ProductCard {...product} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;
