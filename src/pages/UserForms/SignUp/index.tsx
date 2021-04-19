import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form as UnForm } from '@unform/web';
import { FiUserPlus } from 'react-icons/fi';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import PageWrapper from '../components/PageWrapper';
import { Form, FormLink, FormTitle, FormControllers } from '../styles';

import formIllustration from '../../../assets/images/form-illustration.png';
import { useApp } from '../../../hooks';
import { getValidationErrors } from '../../../utils/getValidationErrors';

interface ISignUpFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { isLoading, setLoading } = useApp();

  const handleSubmit = useCallback(
    async (data: ISignUpFormData) => {
      try {
        setLoading();
        formRef.current?.setErrors({});

        const schema = Yup.object({
          name: Yup.string()
            .required('O nome é obrigatório')
            .min(6, 'O nome deve conter no minimo 6 digitos!')
            .max(24, 'O nome deve conter no máximo 24 digitos!'),
          email: Yup.string()
            .email('Digite um email válido!')
            .required('O email é obrigatório'),
          password: Yup.string().required('A senha é obrigatória'),
          password_confirmation: Yup.string()
            .oneOf([Yup.ref('password')], 'As senhas devem ser iguais!')
            .required('A confirmação de senha é obrigatória!'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const validationErrors = getValidationErrors(err);
          formRef.current?.setErrors(validationErrors);
          return;
        }
      } finally {
        setLoading();
      }
    },
    [setLoading],
  );

  return (
    <PageWrapper
      complement={<img src={formIllustration} alt="form illustration" />}
      contentRight
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
          <Button isLoading={isLoading} icon={FiUserPlus} fixedWidth>
            Criar conta
          </Button>
          <FormLink as={Link} to="/" textalign="center">
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
