// components/QuestionDisplay.jsx
import React from 'react';

function QuestionDisplay({ parts, selectedWords, handleFilledBlankClick }) {
  return (
    <div className="mb-8 text-lg">
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && (
            <span 
              className={`inline-block mt-3 mx-1 px-3 py-1 border-b-2 border-gray-400 min-w-20 text-center ${selectedWords[index] ? 'border rounded-md cursor-pointer text-sm' : ''}`}
              onClick={() => selectedWords[index] && handleFilledBlankClick(index)}
              title={selectedWords[index] ? "Click to remove" : ""}
            >
              {selectedWords[index] || " "}
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

export default QuestionDisplay;