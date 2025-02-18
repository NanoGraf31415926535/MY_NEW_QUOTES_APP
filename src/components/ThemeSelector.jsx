import React from 'react';
import translations from '/src/components/translations.json';

function ThemeSelector({ onThemeChange }) {
  return (
    <div>
      <select onChange={(e) => onThemeChange(e.target.value)}>
        <option value="light">{translations.ThemeSelector.light}</option>
        <option value="dark">{translations.ThemeSelector.dark}</option>
      </select>
    </div>
  );
}

export default ThemeSelector;