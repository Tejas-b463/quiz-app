import React from 'react';

function Timer({ timer }) {
  return (
    <div className="text-2xl mb-2">
      0:{timer < 10 ? `0${timer}` : timer}
    </div>
  );
}

export default Timer;
