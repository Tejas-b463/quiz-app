import React from 'react';

function Timer({ timer }) {
  return (
    <div className="text-2xl text-gray-600 mb-2 font-semibold">
      0:{timer < 10 ? `0${timer}` : timer}
    </div>
  );
}

export default Timer;
