import React, { useCallback, useRef } from 'react';
import { Form as UnForm } from '@unform/web';

import { FormHandles } from '@unform/core';
import { FiCheckCircle, FiLock, FiMail, FiUser } from 'react-icons/fi';
import {} from 'react-icons/';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import ContentWrapper from '../../../components/ContentWrapper';

import illustrationSVG from '../../../assets/images/illustration.svg';

import { Form, FormTitle, FormLink, InputsContainer } from '../styles';
import Input from '../../../components/Input';
import ButtonSmall from '../../../components/ButtonSmall';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => undefined, []);

  return (
    <PageDefault>
      <ContentWrapper
        complementRight
        complement={<img src={illustrationSVG} alt="Illustration" />}
      >
        <Form as={UnForm} ref={formRef} onSubmit={handleSubmit}>
          <FormTitle textAlign="right">
            Registre-se para poder criar seus
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <span> Quizzes!</span>
          </FormTitle>

          <InputsContainer>
            <Input
              icon={FiUser}
              name="username"
              placeholder="Digite seu nome de usuário"
            />

            <Input icon={FiMail} name="email" placeholder="Digite seu email" />

            <Input
              icon={FiLock}
              name="password"
              placeholder="Digite sua senha"
            />

            <Input
              icon={FiCheckCircle}
              name="password_confirmation"
              placeholder="Confirme sua senha"
            />
          </InputsContainer>

          <ButtonSmall colorScheme="main" icon="signup" iconLeft>
            Criar conta
          </ButtonSmall>

          <FormLink as={Link} to="entrar" textAlign="center">
            Já tem uma conta?
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <span> Faça login</span>.
          </FormLink>
        </Form>
      </ContentWrapper>
    </PageDefault>
  );
};

export default SignUp;
