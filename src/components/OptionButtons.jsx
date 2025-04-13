// components/OptionButtons.jsx
import React from 'react';

function OptionButtons({ options, handleOptionClick }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {options.map((option, index) => (
        <button
          key={index}
          className="px-4 py-2 rounded-md border bg-white hover:bg-gray-50"
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default OptionButtons;