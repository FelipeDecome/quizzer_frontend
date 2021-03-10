import React from 'react';

import { AnimationContainer, Complement, Container, Content } from './styles';

interface IPageWrapperProps {
  complement: React.ReactNode;
  contentRight?: boolean;
}

const PageWrapper: React.FC<IPageWrapperProps> = ({
  complement,
  contentRight,
  children,
}) => {
  return (
    <Container contentRight={!!contentRight}>
      <Content>
        <AnimationContainer appearFrom={contentRight ? 'right' : 'left'}>
          {children}
        </AnimationContainer>
      </Content>
      <Complement>{complement}</Complement>
    </Container>
  );
};

export default PageWrapper;
