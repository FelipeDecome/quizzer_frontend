import React from 'react';

import { Complement, Container, Content } from './styles';

interface IPageWrapperProps {
  complement?: React.ReactNode;
}

const PageWrapper: React.FC<IPageWrapperProps> = ({ complement, children }) => {
  return (
    <Container>
      <Content>{children}</Content>
      <Complement>{complement}</Complement>
    </Container>
  );
};

export default PageWrapper;
