// components/QuitConfirmationDialog.jsx
import React from 'react';
import { useNavigate } from 'react-router';

function QuitConfirmationDialog({ onCancel, onConfirm }) {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 backdrop-blur-xs radius-2xl flex items-center justify-center z-50">
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md w-full">
        <p className="mb-6 text-center">Are you sure you want to quit? None of your answers will be saved.</p>
        <div className="flex justify-center gap-5">
          <button 
            className="px-12 py-2 border rounded-md hover:bg-gray-100 cursor-pointer"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button 
            className="px-12 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 cursor-pointer"
            onClick={()=> navigate('/')}
          >
            Quit 
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuitConfirmationDialog;