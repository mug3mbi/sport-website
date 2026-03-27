import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm animate-pulse border border-gray-100 min-w-0">
      <div className="bg-gray-200 aspect-square w-full rounded-md mb-4 bg-opacity-70 h-48 sm:h-56"></div>
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-2 opacity-70"></div>
      <div className="h-5 bg-gray-200 rounded w-3/4 mb-3 opacity-70"></div>
      <div className="flex items-center justify-between">
        <div className="h-6 bg-gray-200 rounded w-1/4 opacity-70"></div>
        <div className="h-10 w-10 bg-gray-200 rounded opacity-70"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
