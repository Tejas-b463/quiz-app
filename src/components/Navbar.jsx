import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Back button */}
          <div className="flex items-center">
            <button 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Go back"
            >
              <FaArrowLeft size={24} className="text-gray-700 cursor-pointer" />
            </button>
          </div>
          
          {/* Middle - Title */}
          <div className="flex-1 text-center">
            <h1 className="text-lg font-medium text-gray-800">Sentence Construction</h1>
          </div>
          
          {/* Right side - Menu button */}
          <div className="flex items-center">
            <div className="relative">
              <button 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Open menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <BsThreeDotsVertical size={24} className="text-gray-700 cursor-pointer" />
              </button>
              
              {/* Dropdown menu */}
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Help
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Feedback
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}