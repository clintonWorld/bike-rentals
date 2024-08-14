import React from 'react';

const BikesNotFound = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Bikes Not Found</h1>
        <p className="text-gray-600 mb-6">
          Sorry, we couldn't find any bikes matching your criteria.
        </p>
    
      </div>
    </div>
  );
};

export default BikesNotFound;
