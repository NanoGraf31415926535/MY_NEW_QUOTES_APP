// src/components/SettingsButton.jsx
import React, { useState } from 'react';
import ThemeSelector from '/src/components/ThemeSelector.jsx'; 

function SettingsButton({ onThemeChange }) {
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleSettings}
        className="absolute top-4 left-4 p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2v2m0-2h2m-2 0H10M18 8a2 2 0 11-4 0c0 .99.38 1.85.95 2.45A2 2 0 0118 8zM4 14a2 2 0 11-4 0c0 .99.38 1.85.95 2.45A2 2 0 014 14zM18 14a2 2 0 11-4 0c0 .99.38 1.85.95 2.45A2 2 0 0118 14zM4 20a2 2 0 11-4 0c0 .99.38 1.85.95 2.45A2 2 0 014 20zM18 20a2 2 0 11-4 0c0 .9938 1.85.95 2.45A2 2 0 0118 20z"
            />
          </svg>
        </button>

        {showSettings && (
          <div className="absolute top-12 left-4 bg-gray-800 p-4 rounded shadow-md">
            <ThemeSelector onThemeChange={onThemeChange} />
          </div>
        )}
      </div>
  );
}

export default SettingsButton;