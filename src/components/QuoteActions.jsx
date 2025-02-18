// src/components/QuoteActions.jsx
import React from 'react';
import translations from '/src/components/translations.json';

function QuoteActions({ onShare, onSave, onRegenerate }) {
  return (
    <div className="flex space-x-4 justify-center mt-4">
      <button
        onClick={onShare}
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700 transition-colors duration-200"
      >
        {translations.QuoteActions.share}
      </button>
      <button
        onClick={onSave}
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700 transition-colors duration-200"
      >
        {translations.QuoteActions.save}
      </button>
      <button
        onClick={onRegenerate}
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700 transition-colors duration-200"
      >
        {translations.QuoteActions.regenerate}
      </button>
    </div>
  );
}

export default QuoteActions;