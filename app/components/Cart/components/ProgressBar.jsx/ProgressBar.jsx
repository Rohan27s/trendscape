import React from 'react';
import { FaShippingFast, FaGift, FaPercent } from 'react-icons/fa';

const ProgressBar = ({ totalAmount }) => {
  // Define the thresholds and their corresponding icons
  const thresholds = [
    { amount: 0, label: '', icon: null }, // Starting threshold with no circle
    { amount: 800, label: 'Free Gift', icon: <FaGift /> },
    { amount: 1500, label: 'Free Shipping', icon: <FaShippingFast /> },
  ];

  // Calculate the percentage progress
  let progress = (totalAmount / thresholds[thresholds.length - 1].amount) * 100;
  progress = Math.min(progress, 100); // Ensure progress doesn't exceed 100%

  // Calculate remaining amount to reach the next threshold
  let remaining = 0;
  let nextThreshold = '';
  for (let i = 1; i < thresholds.length; i++) {
    if (totalAmount < thresholds[i].amount) {
      remaining = thresholds[i].amount - totalAmount;
      nextThreshold = thresholds[i].label; // Set next threshold label
      break;
    }
  }

  return (
    <div className='my-8 relative px-4'>
      <div className="progress-bar bg-gray-200 w-full h-2 relative rounded-full overflow-hidden">
        <div className="progress bg-black h-full" style={{ width: `${progress}%` }} />
      </div>
      <div className="thresholds absolute top-[-1rem] left-0 w-[90%] flex justify-between ">
        {thresholds.map((threshold, index) => (
          <div key={index} className={`threshold text-center flex justify-center items-center flex-col w-auto relative ${totalAmount >= threshold.amount ? 'text-black-500' : 'text-black-400'}`}>
            {index !== 0 && (
              <div className={`circle rounded-full w-10 h-10 flex items-center justify-center ${totalAmount >= threshold.amount ? 'bg-black text-white border border-black' : 'bg-white border border-black'}`}>
                {threshold.icon && <span className="text-lg">{threshold.icon}</span>}
              </div>
            )}
            <p className="text-sm mt-1 text-start">{threshold.label}</p>
          </div>
        ))}
      </div>
      <div>
        {remaining > 0 && (
          <div className="text-sm w-full mt-12 mb-[-2rem] text-center">
            <span className="font-bold text-lg">{`Rs. ${remaining.toFixed(2)}`}</span>
            <span className="ml-1">more to reach {nextThreshold}</span> 
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
