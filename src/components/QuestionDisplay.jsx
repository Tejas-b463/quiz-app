import React from 'react';

function QuestionDisplay({ parts, selectedWords, handleFilledBlankClick }) {
  return (
    <div className="mb-8 font-medium  text-base md:text-lg lg:text-xl min-h-32">
      {parts.map((part, index) => (
        <span key={index} >
          {part}
          {index < parts.length - 1 && (
            <span 
              className={`inline-block  mt-1 mx-1 px-3 py-1 border-b-1 min-w-20 text-center ${
                selectedWords[index] 
                  ? 'border font-normal text-base  border-gray-600 rounded-md cursor-pointer' 
                  : ''
              }`}
              onClick={() => selectedWords[index] && handleFilledBlankClick(index)}
              title={selectedWords[index] ? "Click to remove" : ""}
            >
              {selectedWords[index] || "\u00A0\u00A0\u00A0"} {/* Using non-breaking spaces to maintain minimum width */}
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

export default QuestionDisplay;