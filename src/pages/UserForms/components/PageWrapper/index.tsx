import React from 'react';

import { Complement, Container, Content } from './styles';

interface IPageWrapperProps {
  complement: React.ReactNode;
  contentLeft?: boolean;
}

const PageWrapper: React.FC<IPageWrapperProps> = ({
  complement,
  contentLeft,
  children,
}) => {
  return (
    <Container contentLeft={!!contentLeft}>
      <Content>{children}</Content>
      <Complement>{complement}</Complement>
    </Container>
  );
};

export default PageWrapper;
