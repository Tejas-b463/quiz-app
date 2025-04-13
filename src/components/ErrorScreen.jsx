// components/ErrorScreen.jsx
import React from 'react';

function ErrorScreen({ message }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-xl text-red-500">{message}</div>
    </div>
  );
}

export default ErrorScreen;