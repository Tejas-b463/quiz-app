import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="w-full mt-12 max-w-screen-xl mx-auto p-4 relative">
      {/* Base skeleton with pulse animation */}
      <div className="space-y-6 animate-pulse">
        {/* Header section */}
        <div className="space-y-3">
          <div className="h-7 bg-gray-200 rounded-md w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded-md w-1/2"></div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gray-200 w-full"></div>
        
        {/* Content cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border border-gray-200 rounded-lg p-4 space-y-3">
              <div className="h-5 bg-gray-200 rounded-md w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded-md"></div>
                <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded-md w-4/6"></div>
              </div>
              <div className="flex justify-end">
                <div className="h-8 bg-gray-200 rounded-md w-24"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer/Navigation section */}
        <div className="flex justify-between pt-4">
          <div className="h-10 bg-gray-200 rounded-md w-32"></div>
          <div className="h-10 bg-gray-200 rounded-md w-32"></div>
        </div>
      </div>
      
      {/* Shimmer effect overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="shimmer-effect"></div>
      </div>
      
      {/* Custom CSS for shimmer effect */}
      <style jsx>{`
        .shimmer-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0)
          );
          transform: translateX(-100%);
          animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;