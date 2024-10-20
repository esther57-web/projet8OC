import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
  
    useEffect(() => {
      // Vérifie si un thème est déjà enregistré
  const savedTheme = localStorage.getItem('theme');
  
  // Si le thème enregistré est 'light', on le remplace par 'dark'
  if (savedTheme === 'light') {
    setTheme('dark');
  }
    }, []);

  
    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      //document.documentElement.classList.remove(theme);
    //document.documentElement.classList.add(newTheme);
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