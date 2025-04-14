// components/NavigationControls.jsx
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

function NavigationControls({ 
  currentQuestionIndex, 
  totalQuestions, 
  isAllBlanksFilledIn, 
  handleNextQuestion 
}) {
  return (
    <div className="mt-auto flex justify-between items-center">
      <div>
        Question {currentQuestionIndex + 1}/{totalQuestions}
      </div>
     <div className="flex gap-4">
  <button
    className={`px-5 py-3 rounded-md cursor-pointer ${
      isAllBlanksFilledIn
        ? 'bg-blue-700 text-white hover:bg-blue-600'
        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
    }`}
    onClick={handleNextQuestion}
    disabled={!isAllBlanksFilledIn}
  >
    <FiArrowRight size={24} />
  </button>
</div>
    </div>
  );
}

export default NavigationControls;