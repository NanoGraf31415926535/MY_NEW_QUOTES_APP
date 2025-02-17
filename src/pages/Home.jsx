// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import QuoteCard from '/Users/artemsakhniuk/Desktop/React/my-new-quotes-app/src/components/QuoteCard.jsx';
import QuoteActions from '/Users/artemsakhniuk/Desktop/React/my-new-quotes-app/src/components/QuoteActions.jsx';
import FavoriteQuotes from '/Users/artemsakhniuk/Desktop/React/my-new-quotes-app/src/components/FavoriteQuotes.jsx';
import fetchQuote from '/Users/artemsakhniuk/Desktop/React/my-new-quotes-app/src/utilitis/fetchQuote.js';
import ThemeSelector from '/Users/artemsakhniuk/Desktop/React/my-new-quotes-app/src/components/ThemeSelector.jsx'; 

function Home() {
  const [quote, setQuote] = useState('Loading quote...');
  const [favoriteQuotes, setFavoriteQuotes] = useState([]);
  const [theme, setTheme] = useState('light'); // Add theme state

  useEffect(() => {
    getNewQuote();
  }, []);

  const getNewQuote = async () => {
    setQuote('Loading quote...');
    const fetchedQuote = await fetchQuote();
    setQuote(fetchedQuote);
  };

  const handleShare = () => {
    const shareUrl = `https://twitter.com/intent/tweet?text=${quote}`;
    window.open(shareUrl, '_blank');
  };

  const handleSave = () => {
    setFavoriteQuotes([...favoriteQuotes, quote]);
  };

  const handleRegenerate = () => {
    getNewQuote();
  };

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    if (selectedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`h-screen flex ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Left Dark Section */}
      <div className="w-1/2 bg-gray-900 text-white flex flex-col items-center justify-center">
        <ThemeSelector onThemeChange={handleThemeChange} /> {/* Add ThemeSelector */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <div className="text-4xl font-bold mb-4">Quotely</div>
        <div className="text-sm">Your daily dose of motivation.</div>
      </div>

      {/* Right Quote Section */}
      <div className="w-1/2 flex flex-col items-center justify-center">
        <QuoteCard quote={quote} />
        <QuoteActions onShare={handleShare} onSave={handleSave} onRegenerate={handleRegenerate} />
        <FavoriteQuotes quotes={favoriteQuotes} />
      </div>
    </div>
  );
}

export default Home;