import React from 'react';
import { FiUserPlus } from 'react-icons/fi';
import Button from '../../components/Button';
import { Header } from '../../shared/styles/components/Fonts';

import { Container } from './styles';

const TestPage: React.FC = () => {
  return (
    <Container>
      <Header>Tests</Header>
      <Button icon={FiUserPlus} fixedWidth>
        Criar conta
      </Button>
    </Container>
  );
};

export default TestPage;
