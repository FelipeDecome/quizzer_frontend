import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

const GoBackButton: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <button type="button" onClick={history.goBack}>
        <FiArrowLeft />
        Voltar
      </button>
    </Container>
  );
};

export default GoBackButton;
