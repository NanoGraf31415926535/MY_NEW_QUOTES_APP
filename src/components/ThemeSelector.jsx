import React from 'react';

function ThemeSelector({ onThemeChange }) {
  return (
    <div>
      <select onChange={(e) => onThemeChange(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}

export default ThemeSelector;