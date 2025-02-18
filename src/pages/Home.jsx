// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import QuoteCard from '/src/components/QuoteCard.jsx';
import QuoteActions from '/src/components/QuoteActions.jsx';
import FavoriteQuotes from '/src/components/FavoriteQuotes.jsx';
import fetchQuote from '/src/utilitis/fetchQuote.js';
import translations from '/src/components/translations.json';
import SettingsButton from '/src/components/SettingsButton.jsx';

function Home() {
  const [quote, setQuote] = useState(translations.Home.loadingQuote.en);
  const [favoriteQuotes, setFavoriteQuotes] = useState([]);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en'); // Add language state

  useEffect(() => {
    getNewQuote();
  }, []);

  const getNewQuote = async () => {
    setQuote(translations.Home.loadingQuote[language]);
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

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    getNewQuote(); // Update the quote when the language changes
  };

  const translate = (key) => {
    return translations[key][language];
  };

  return (
    <div className={`h-screen flex ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="absolute inset-x-0 bottom-0 w-full h-1/2 bg-white z-[-1]"></div>
      <div className="w-1/2 bg-black flex flex-col items-center justify-center text-white relative">
        
        {/* Settings button positioned at the top-left */}
        <div className="absolute top-4 left-4">
          <SettingsButton onThemeChange={handleThemeChange} />
        </div>
  
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
        <div className="text-4xl font-bold mb-4">{translations.Home.quotely}</div>
        <div className="text-sm">{translations.Home.motivation}</div>
      </div>
  
      <div className="w-1/2 flex flex-col items-center justify-center">
        <QuoteCard quote={quote} />
        <QuoteActions onShare={handleShare} onSave={handleSave} onRegenerate={handleRegenerate} />
        <FavoriteQuotes quotes={favoriteQuotes} />
      </div>
    </div>
  );  
}

export default Home;
