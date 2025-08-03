import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true); // Default to dark theme

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const isDarkTheme = savedTheme === 'dark';
      setIsDark(isDarkTheme);
      updateDocumentClass(isDarkTheme);
    } else {
      // Default to dark theme
      setIsDark(true);
      updateDocumentClass(true);
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const updateDocumentClass = (isDarkTheme) => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    updateDocumentClass(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  const value = {
    isDark,
    toggleTheme,
    theme: isDark ? 'dark' : 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
