import React from 'react';

function FavoriteQuotes({ quotes }) {
  return (
    <div className="mt-6 p-4 border border-gray-300 rounded-lg"> 
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Favorite Quotes</h2> 
      <ul className="list-disc list-inside text-left text-lg">
        {quotes.map((quote, index) => (
          <li key={index} className="text-gray-700 mb-2">{quote}</li> 
        ))}
      </ul>
    </div>
  );
}

export default FavoriteQuotes;