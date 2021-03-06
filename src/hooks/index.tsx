import React, { useContext, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import GlobalStyle from '../shared/styles/global';
import { light } from '../shared/styles/themes/light';
import { dark } from '../shared/styles/themes/dark';
import AuthProvider from './auth';

const themes = {
  light,
  dark,
};

type TThemes = keyof typeof themes;

interface IAppContextData {
  setAppLoading: React.Dispatch<React.SetStateAction<boolean>>;
  appLoading: boolean;
  setTheme: () => void;
  theme: DefaultTheme;
}

const AppContext = React.createContext({} as IAppContextData);

export const AppProvider: React.FC = ({ children }) => {
  const [appLoading, setAppLoading] = useState(false);

  const [selectedTheme, setSelectedTheme] = useState<TThemes>(
    () => (localStorage.getItem('@Quizzes:theme') as TThemes) || 'light',
  );

  const setTheme = () => {
    setSelectedTheme(state => {
      const newState = state === 'light' ? 'dark' : 'light';

      localStorage.setItem('@Quizzes:theme', newState);

      return newState;
    });
  };

  return (
    <AppContext.Provider
      value={{
        setAppLoading,
        appLoading,
        setTheme,
        theme: themes[selectedTheme],
      }}
    >
      <AuthProvider>
        <ThemeProvider theme={themes[selectedTheme]}>
          {children}
          <GlobalStyle />
        </ThemeProvider>
      </AuthProvider>
    </AppContext.Provider>
  );
};

export function useApp(): IAppContextData {
  return useContext(AppContext);
}
