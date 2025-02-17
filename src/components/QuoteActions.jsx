// src/components/QuoteActions.jsx
import React from 'react';

function QuoteActions({ onShare, onSave, onRegenerate }) {
  return (
    <div className="flex space-x-4 justify-center mt-4"> {/* Added justify-center and mt-4 */}
      <button
        onClick={onShare}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Share
      </button>
      <button
        onClick={onSave}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Save
      </button>
      <button
        onClick={onRegenerate}
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        Regenerate
      </button>
    </div>
  );
}

export default QuoteActions;