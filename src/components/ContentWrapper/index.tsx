import React from 'react';

import { Container, Content, Complement } from './styles';

interface IContentWrapperProps {
  complement: React.ReactNode;
  complementRight?: boolean;
}

const ContentWrapper: React.FC<IContentWrapperProps> = ({
  children,
  complement,
  complementRight,
}) => {
  return (
    <Container complementRight={complementRight}>
      <Content>{children}</Content>

      <Complement>{complement}</Complement>
    </Container>
  );
};

export default ContentWrapper;
