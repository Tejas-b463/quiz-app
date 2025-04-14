import React from 'react';

function OptionButtons({ options, selectedWords, handleOptionClick }) {
  // Filter out options that have already been selected
  const availableOptions = options.filter(option => 
    !selectedWords?.some(word => word === option)
  );

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8 min-h-10">
      {availableOptions.map((option, index) => (
        <button
          key={index}
          className="px-4 py-2  rounded-md border bg-white hover:bg-gray-50 transition-colors cursor-pointer  text-center"
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default OptionButtons;