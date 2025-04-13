// components/NavigationControls.jsx
import React from 'react';

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
          className={`px-4 py-2 rounded-md ${
            isAllBlanksFilledIn
              ? 'bg-orange-400 text-white hover:bg-orange-500'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
          onClick={handleNextQuestion}
          disabled={!isAllBlanksFilledIn}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NavigationControls;