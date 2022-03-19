import { useMatchMedia } from 'src/hooks';
import React from 'react';

type ThemeProviderProps = { children: React.ReactNode };
type ThemeState = {
  state: boolean,
  toggle: (val: boolean) => void,
};

const DefaultValue = { state: false, toggle: () => {} };

const ThemeContex = React.createContext<ThemeState | undefined>(DefaultValue);

const ThemeProvider = ({ children }: ThemeProviderProps): React.ReactElement => {
  const { dakrMode } = useMatchMedia();
  const [theme, setTheme] = React.useState(DefaultValue.state);

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

const useTheme = () => {
  const context = React.useContext(ThemeContex);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

export { ThemeProvider, useTheme };
