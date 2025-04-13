// components/ProgressBar.jsx
import React from 'react';

function ProgressBar({ currentQuestionIndex, totalQuestions }) {
  return (
    <div className="flex mb-8">
      {Array.from({ length: totalQuestions }, (_, index) => (
        <div 
          key={index}
          className={`h-1 flex-1 mx-1 rounded-full ${index <= currentQuestionIndex ? 'bg-orange-400' : 'bg-gray-200'}`}
        />
      ))}
    </div>
  );
}

export default ProgressBar;