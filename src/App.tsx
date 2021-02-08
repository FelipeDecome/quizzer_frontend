import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';

import GlobalStyle from './styles/global';
import { light } from './styles/themes/default';

const App: React.FC = () => (
  <ThemeProvider theme={light}>
    <Header />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
