import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form as UnForm } from '@unform/web';
import { FiUserPlus } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import PageWrapper from '../components/PageWrapper';
import { Form, FormLink, FormTitle, FormControllers } from '../styles';

import formIllustration from '../../../assets/images/form-illustration.png';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    formRef.current?.setErrors({
      name: 'Nome de usuário obrigatório',
      email: 'Digite um email válido',
      password: 'Digite uma senha válida',
      password_confirmation: 'As senhas devem ser iguais',
    });
  }, []);

  return (
    <PageWrapper
      complement={<img src={formIllustration} alt="form illustration" />}
      contentLeft
    >
      <Form ref={formRef} as={UnForm} onSubmit={handleSubmit}>
        <FormTitle>Registre-se e comece a criar</FormTitle>

        <FormControllers>
          <Input name="name" placeholder="Digite seu nome de usuário" />

          <Input name="email" placeholder="Digite seu email" />

          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />

          <Input
            type="password"
            name="password_confirmation"
            placeholder="Confirme sua senha"
          />
        </FormControllers>

        <FormControllers>
          <Button icon={FiUserPlus} fixedWidth>
            Criar conta
          </Button>
          <FormLink as={Link} to="/entrar" textAlign="center">
            Já tem uma conta?
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <span> Faça login</span>.
          </FormLink>
        </FormControllers>
      </Form>
    </PageWrapper>
  );
};

export { SignUp };
