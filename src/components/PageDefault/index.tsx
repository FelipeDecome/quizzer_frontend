import React from 'react';
import Footer from '../Footer';

import Header from '../Header';

import { Container, Background } from './styles';

const PageDefault: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Background />

      {children}

      <Footer />
    </Container>
  );
};

export default PageDefault;
