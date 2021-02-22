import React, { useCallback, useRef } from 'react';
import { FiLock, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import ButtonSmall from '../../components/ButtonSmall';
import PageDefault from '../../components/PageDefault';

// import { StyledForm } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => undefined, []);

  return (
    <PageDefault>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Login</h1>

        <Input icon={FiMail} name="email" placeholder="Digite seu e-mail" />
        <Input icon={FiLock} name="email" placeholder="Digite sua senha" />
        <a href="/">Esqueceu sua senha?</a>

        <ButtonSmall colorScheme="main" icon="signin" iconLeft>
          Entrar
        </ButtonSmall>
        <a href="/">
          Não tem uma conta?
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          <span> Registre-se</span>.
        </a>
      </Form>
    </PageDefault>
  );
};

export default SignIn;
