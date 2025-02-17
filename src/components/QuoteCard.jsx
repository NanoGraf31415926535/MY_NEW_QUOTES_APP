// src/components/QuoteCard.jsx
import React from 'react';

function QuoteCard({ quote }) {
  return (
    <div className="p-8 flex flex-col justify-center items-center">
      <p className="text-xl italic text-center mb-4">{quote}</p>
    </div>
  );
}

export default QuoteCard;