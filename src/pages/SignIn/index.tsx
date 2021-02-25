import React, { useCallback, useRef } from 'react';
import { FiLock, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form as UnForm } from '@unform/web';

import Input from '../../components/Input';
import ButtonSmall from '../../components/ButtonSmall';
import PageDefault from '../../components/PageDefault';
import ContentWrapper from '../../components/ContentWrapper';

import illustrationSVG from '../../assets/images/illustration.svg';

import { Form, FormTitle, FormLink } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => undefined, []);

  return (
    <PageDefault>
      <ContentWrapper
        complement={<img src={illustrationSVG} alt="Illustration" />}
      >
        <Form as={UnForm} ref={formRef} onSubmit={handleSubmit}>
          <FormTitle>Login</FormTitle>

          <Input icon={FiMail} name="email" placeholder="Digite seu e-mail" />
          <Input icon={FiLock} name="email" placeholder="Digite sua senha" />
          <FormLink href="/" textAlign="right">
            Esqueci minha senha.
          </FormLink>

          <ButtonSmall colorScheme="main" icon="signin" iconLeft>
            Entrar
          </ButtonSmall>
          <FormLink href="/" textAlign="center">
            Não tem uma conta?
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <span> Registre-se</span>.
          </FormLink>
        </Form>
      </ContentWrapper>
    </PageDefault>
  );
};

export default SignIn;
