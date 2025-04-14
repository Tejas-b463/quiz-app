import React from 'react';
import { FaAlignCenter } from 'react-icons/fa'; 
import { useNavigate } from 'react-router';

export default function SentenceConstruction() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/question')
  }
  return (
    <div className="mt-40 flex items-center justify-center px-4">
      <div className="text-center max-w-md w-full">
        {/* Icon */}
        <div className="text-4xl text-gray-500 mb-4 flex justify-center">
          <FaAlignCenter />
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
          Sentence Construction
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm sm:text-base mb-8">
          Select the correct words to complete the sentence by arranging the provided options in the right order.
        </p>

        {/* Stats */}
        <div className="flex justify-around text-sm sm:text-base mb-8">
          <div>
            <p className="font-semibold text-gray-800">Time Per Question</p>
            <p className="text-gray-500">30 sec</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Total Questions</p>
            <p className="text-gray-500">10</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Coins</p>
            <p className="flex items-center justify-center text-gray-500">
              <span >🟡</span> 20
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="cursor-pointer px-12 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition">
            Back
          </button>
          <button className="cursor-pointer px-12 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          onClick={handleClick}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
}
