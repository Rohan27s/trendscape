"use client";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomerReview = () => {
    const defaultReviews = [
        { name: "John Doe", rating: 4, comment: "This product is amazing! It exceeded my expectations." },
        { name: "Jane Smith", rating: 5, comment: "Great quality and comfortable to wear. Highly recommended." },
        { name: "Alex Johnson", rating: 3, comment: "The color options are fantastic. I love the variety." },
        { name: "John Doe", rating: 4, comment: "This product is amazing! It exceeded my expectations." },
        { name: "John Doe", rating: 4, comment: "This product is amazing! It exceeded my expectations." },
        { name: "Jane Smith", rating: 5, comment: "Great quality and comfortable to wear. Highly recommended." },
        { name: "Alex Johnson", rating: 3, comment: "The color options are fantastic. I love the variety." },
        { name: "John Doe", rating: 4, comment: "This product is amazing! It exceeded my expectations." },
        { name: "John Doe", rating: 4, comment: "This product is amazing! It exceeded my expectations." },
        { name: "Jane Smith", rating: 5, comment: "Great quality and comfortable to wear. Highly recommended." },
        { name: "Alex Johnson", rating: 3, comment: "The color options are fantastic. I love the variety." },
        { name: "John Doe", rating: 4, comment: "This product is amazing! It exceeded my expectations." },
    ];

    const [reviews, setReviews] = useState(defaultReviews.slice(0, 4));
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [showAllReviews, setShowAllReviews] = useState(false);
    const [selectedRating, setSelectedRating] = useState(0);
    const [newName, setNewName] = useState('');
    const [newReview, setNewReview] = useState('');
    const [submittedReview, setSubmittedReview] = useState(false);

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleInputChange = (event) => {
        setNewReview(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newName.trim() !== '' && newReview.trim() !== '' && selectedRating !== 0) {
            setReviews([...reviews, { name: newName, rating: selectedRating, comment: newReview }]);
            setNewName('');
            setNewReview('');
            setSelectedRating(0);
            setShowReviewForm(false); 
            setSubmittedReview(true); 
            toast.success("Thank you for your review!");
        }
    };

    const handleViewMore = () => {
        const remainingReviews = defaultReviews.slice(reviews.length);
        setReviews([...reviews, ...remainingReviews.slice(0, 4)]);
        if (remainingReviews.length <= 4) {
            setShowAllReviews(true);
        }
    };

    const handleLeaveReview = () => {
        setShowReviewForm(true);
    };

    const handleStarHover = (rating) => {
        setSelectedRating(rating);
    };

    const handleStarClick = (rating) => {
        setSelectedRating(rating);
    };

    return (
        <div className="mt-16">
            <h3 className="text-2xl font-bold mb-4 text-center">Customer Reviews</h3>
            {!submittedReview && (
                <p className="text-center mb-4">Your feedback matters! Share your experience with us by leaving a review.</p>
            )}
            {submittedReview && (
                <p className="text-center mb-4">Thank you for sharing your experience with us!</p>
            )}

            {!showReviewForm && (
                <div className='flex w-full justify-center mb-4'>
                    <button onClick={handleLeaveReview} className="border-2  bg-black text-white font-bold py-2 px-4 mt-2 rounded-xl hover:bg-gray-700 hover:text-white">Leave a Review</button>
                </div>
            )}
            {showReviewForm && (
                <div className="mb-4 border-4 border-black rounded-xl p-6 animate-slideIn w-[50%] flex justify-center mx-auto" >
                    <form onSubmit={handleSubmit} className='w-full'>
                        <div className="flex items-center mb-2">
                            <label htmlFor="name" className="mr-2 font-bold">Name:</label>
                            <input type="text" id="name" value={newName} onChange={handleNameChange} className="border w-full border-gray-300 rounded px-2 py-1" placeholder="Enter your name" required />
                        </div>
                        <div className="flex items-center mb-2">
                            <label htmlFor="rating" className="mr-2 font-bold">Rating:</label>
                            {[...Array(5)].map((_, index) => (
                                <svg key={index} xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 text-${selectedRating > index ? 'yellow' : 'gray'}-300 fill-current cursor-pointer`} viewBox="0 0 20 20"
                                    onMouseEnter={() => handleStarHover(index + 1)}
                                    onMouseLeave={() => handleStarHover(selectedRating)}
                                    onClick={() => handleStarClick(index + 1)}>
                                    <path d="M10 2.5l1.55 4.785h4.995l-4.045 2.94 1.55 4.785-4.045-2.94-4.045 2.94 1.55-4.785-4.045-2.94h4.995z" />
                                </svg>
                            ))}
                        </div>
                        <textarea
                            value={newReview}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded p-2"
                            placeholder="Write your review here..."
                            rows="4"
                            required
                        ></textarea>
                        <button type="submit" className="border-2 border-black bg-white-500 text-black font-bold py-2 px-4 mt-2 rounded hover:bg-black hover:text-white">Submit Review</button>
                    </form>
                </div>
            )}
            {reviews.length > 0 && (
                <div>
                    {reviews.map((review, index) => (
                        <div key={index} className="border rounded p-4 mb-2">
                            <div className="flex justify-between mb-2">
                                <p className="font-semibold">{review.name}</p>
                                <div className="flex">
                                    {[...Array(review.rating)].map((_, index) => (
                                        <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-300 fill-current" viewBox="0 0 20 20">
                                            <path d="M10 2.5l1.55 4.785h4.995l-4.045 2.94 1.55 4.785-4.045-2.94-4.045 2.94 1.55-4.785-4.045-2.94h4.995z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p>{review.comment}</p>
                        </div>
                    ))}
                </div>
            )}
            {!showAllReviews && defaultReviews.length > reviews.length && (
                <div className='flex w-full justify-center mb-4'>
                    <button onClick={handleViewMore} className="border-2 border-black bg-white-500 text-black font-bold py-2 px-4 mt-2 rounded hover:bg-black hover:text-white">View More Reviews</button>
                </div>
            )}
        </div>
    );
};

export default CustomerReview;



