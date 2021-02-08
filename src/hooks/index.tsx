import React, { useCallback, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import { light } from '../styles/themes/light';
import { dark } from '../styles/themes/dark';

const themes = {
  light,
  dark,
};

type TThemes = keyof typeof themes;

interface IAppContextData {
  setTheme: () => void;
}

const AppContext = React.createContext({} as IAppContextData);

export const AppProvider: React.FC = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState<TThemes>(
    () => (localStorage.getItem('@Quizzes:theme') as TThemes) || 'light',
  );

  const setTheme = useCallback(() => {
    setSelectedTheme(state => {
      const newState = state === 'light' ? 'dark' : 'light';

      localStorage.setItem('@Quizzes:theme', newState);

      return newState;
    });
  }, []);

  return (
    <AppContext.Provider value={{ setTheme }}>
      <ThemeProvider theme={themes[selectedTheme]}>
        {children}
        <GlobalStyle />
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export function useApp(): IAppContextData {
  return useContext(AppContext);
}
