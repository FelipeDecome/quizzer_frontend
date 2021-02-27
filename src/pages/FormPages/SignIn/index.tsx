import React, { useCallback, useRef } from 'react';
import { FiLock, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form as UnForm } from '@unform/web';

import { Link } from 'react-router-dom';
import Input from '../../../components/Input';
import ButtonSmall from '../../../components/ButtonSmall';
import PageDefault from '../../../components/PageDefault';
import ContentWrapper from '../../../components/ContentWrapper';

import illustrationSVG from '../../../assets/images/illustration.svg';

import { Form, FormTitle, InputsContainer, FormLink } from '../styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => console.log('submited'), []);

  return (
    <PageDefault>
      <ContentWrapper
        complement={<img src={illustrationSVG} alt="Illustration" />}
      >
        <Form as={UnForm} ref={formRef} onSubmit={handleSubmit}>
          <FormTitle textAlign="left">
            Acesse e comece a criar
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <span> Quizzes!</span>
          </FormTitle>

          <InputsContainer>
            <Input icon={FiMail} name="email" placeholder="Digite seu e-mail" />

            <Input icon={FiLock} name="email" placeholder="Digite sua senha" />

            <FormLink as={Link} to="/senha/esqueci" textAlign="right">
              Esqueci minha senha.
            </FormLink>
          </InputsContainer>

          <ButtonSmall colorScheme="main" icon="signin" iconLeft>
            Entrar
          </ButtonSmall>

          <FormLink as={Link} to="registro" textAlign="center">
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
