import React from 'react';

const ProgressBar = ({ totalAmount }) => {
  // Define the threshold for free shipping
  const freeShippingThreshold = 1500;

  // Calculate the progress as a percentage
  let progress = (totalAmount / freeShippingThreshold) * 100;

  // Ensure the progress doesn't exceed 100%
  progress = Math.min(progress, 100);

  // Calculate the remaining amount for free shipping
  const remaining = freeShippingThreshold - totalAmount;

  // Determine the message to display above the progress bar
  const message = progress === 100
    ? 'Free shipping unlocked!'
    : `You're missing Rs. ${remaining.toFixed(2)} for free shipping`;

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }} />
      <p className="message text-center font-bold text-md">{message}</p>
    </div>
  );
};

export default ProgressBar;
