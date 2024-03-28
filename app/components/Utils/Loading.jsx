import React from 'react';

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
    </div>
  );
};

export default Loading;
