import React from 'react';
import { BiErrorCircle } from "react-icons/bi";
import { IoRefreshCircleOutline } from "react-icons/io5";

const ErrorPage = ({ 
  errorMessage = "Something went wrong", 
  subMessage = "We couldn't load the content you requested.",
  onRetry = () => window.location.reload() 
}) => {
  return (
    <div className="w-full mt-40 flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <BiErrorCircle className="text-red-500 text-6xl" />
        </div>
        
        {/* Error Message */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {errorMessage}
        </h1>
        
        {/* Sub Message */}
        <p className="text-gray-600 mb-8">
          {subMessage}
        </p>
        
        {/* Try Again Button */}
        <button
          onClick={onRetry}
          className="flex items-center justify-center mx-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-full shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
        >
          <IoRefreshCircleOutline className="mr-2 text-xl " />
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;