import React from 'react';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i} className="text-yellow-300">&#9733;</span>); // Filled star
    } else {
      stars.push(<span key={i} className="text-gray-400">&#9733;</span>); // Empty star
    }
  }
  return (
    <div className="flex text-2xl">
      {stars}
    </div>
  );
};

export default StarRating;
