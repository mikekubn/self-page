import React from 'react';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  return 'light';
};

const ThemeContex = React.createContext(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }): null => (
  // const [theme, setTheme] = React.useState(false);

  // console.log('theme', theme);

  // return (
  //   <ThemeContex.Provider value={theme}>{children}</ThemeContex.Provider>

  // );
  null
);

const useTheme = () => {
  const context = React.useContext(ThemeContex);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeContex, ThemeProvider, useTheme };
