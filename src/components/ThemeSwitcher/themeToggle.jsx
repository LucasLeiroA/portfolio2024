import React, { useState, useEffect } from 'react';
import './ThemeSwitcher.scss';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsDarkMode(savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme); // Guarda el estado en el almacenamiento local
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };
  return (
    <div className="theme-switcher">
      <input
        type="checkbox"
        id="toggle"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <label htmlFor="toggle"></label>
    </div>
  );
};

export default ThemeSwitcher;
