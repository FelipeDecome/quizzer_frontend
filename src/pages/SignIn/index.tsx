import React from 'react';
import { FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import ButtonSmall from '../../components/ButtonSmall';

import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Form onSubmit={() => undefined}>
        <h1>Login</h1>
        <div>
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
        </div>
      </Form>
    </Container>
  );
};

export default SignIn;
