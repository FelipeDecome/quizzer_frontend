import React from 'react';
import { AppProvider } from './hooks';

import Header from './components/Header';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Header />
    </AppProvider>
  );
};

export default App;
