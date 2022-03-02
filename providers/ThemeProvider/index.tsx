import { useMatchMedia } from 'components/hooks';
import React from 'react';

type ThemeProviderProps = { children: React.ReactNode };
type ThemeState = {
  state: boolean,
  toggle: (val: boolean) => void,
};

const ThemeContex = React.createContext<ThemeState | undefined>({ state: false, toggle: () => {} });

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { dakrMode } = useMatchMedia();
  const [theme, setTheme] = React.useState(false);

  React.useEffect(() => {
    if (dakrMode) {
      setTheme(true);
    }
  }, [dakrMode]);

  React.useEffect(() => {
    if (theme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContex.Provider value={{ state: theme, toggle: (val) => setTheme(val) }}>
      {children}
    </ThemeContex.Provider>
  );
};

const useThemeContex = () => {
  const context = React.useContext(ThemeContex);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

export { ThemeProvider, useThemeContex };
