import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form as UnForm } from '@unform/web';
import { FiUserPlus } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import PageWrapper from '../components/PageWrapper';
import {
  Form,
  FormLink,
  FormTitle,
  FormControllers,
  FormDescription,
} from '../styles';

import formIllustration from '../../../assets/images/form-illustration.png';

const RecoverPassword: React.FC = () => {
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
          <FormDescription>
            Estamos quase lá. Agora escolha sua nova senha.
          </FormDescription>

          <Input
            type="password"
            name="password"
            placeholder="Digite sua nova senha"
          />

          <Input
            type="password"
            name="password_confirmation"
            placeholder="Confirme sua nova senha"
          />
        </FormControllers>

        <FormControllers>
          <Button fixedWidth>Alterar minha senha</Button>
          <FormLink as={Link} to="/registro" textAlign="center">
            Lembrou sua senha?
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <span> Volte e faça login</span>.
          </FormLink>
        </FormControllers>
      </Form>
    </PageWrapper>
  );
};

export { RecoverPassword };
