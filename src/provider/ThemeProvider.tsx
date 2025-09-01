import { useEffect } from 'react';
import { useThemeStore } from '../store/themeStore';

const ThemeProvider = () => {
  const { themeStatus } = useThemeStore();

 

  useEffect(() => {
    if(themeStatus.isDarkTheme){

      document.documentElement.classList.remove('dark', 'light');
      document.documentElement.classList.add(themeStatus.themeValue);
    }else{
           document.documentElement.classList.remove('dark', 'light');
           document.documentElement.classList.add(themeStatus.themeValue);
    
    }
  }, [themeStatus]);

  return null;
};

export default ThemeProvider;
