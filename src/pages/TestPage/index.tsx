import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Header } from '../../shared/styles/components/Fonts';
import { Container } from './styles';

const TestPage: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    formRef.current?.setErrors({ email: 'Digite um email válido' });
  }, []);

  return (
    <Container>
      <Header>Tests</Header>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input type="text" name="email" placeholder="Digite seu email" />

        <Button fixedWidth>Enviar</Button>
      </Form>
    </Container>
  );
};

export default TestPage;
