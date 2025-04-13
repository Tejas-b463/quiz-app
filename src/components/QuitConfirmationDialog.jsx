// components/QuitConfirmationDialog.jsx
import React from 'react';

function QuitConfirmationDialog({ onCancel, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Quit Test</h2>
        <p className="mb-6">Are you sure you want to quit the test? Your progress will be lost.</p>
        <div className="flex justify-end gap-3">
          <button 
            className="px-4 py-2 border rounded-md hover:bg-gray-100"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button 
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            onClick={onConfirm}
          >
            Quit Test
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuitConfirmationDialog;