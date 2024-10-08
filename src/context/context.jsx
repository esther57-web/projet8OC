import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Créer le contexte
const ScreenSizeContext = createContext();

// Fournisseur de contexte
export const ScreenSizeProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState();

  const updateScreenSize = () => {
    const width = window.innerWidth;
    if (width > 950) {
      setScreenSize('computer');
    } else if (width >= 600) {
      setScreenSize('tablet');
    } else {
      setScreenSize('mobile');
    }
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

// Hook pour utiliser le contexte
export const useScreenSize = () => {
  return useContext(ScreenSizeContext);
};

ScreenSizeProvider.propTypes = {
    children: PropTypes.any,
};


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
  
    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }, []);
  
    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export const useTheme = () => {
    return useContext(ThemeContext);
  };

 ThemeProvider.propTypes = {
    children: PropTypes.any,
};