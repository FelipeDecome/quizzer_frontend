import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form as UnForm } from '@unform/web';
import { FiLogIn } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import PageWrapper from '../components/PageWrapper';
import { Form, FormLink, FormTitle, FormControllers } from '../styles';

import formIllustration from '../../../assets/images/form-illustration.png';
import ForgotPasswordModal from '../components/ForgotPasswordModal';

const SignIn: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    formRef.current?.setErrors({
      email: 'Digite um email válido',
      password: 'Digite uma senha válida',
    });
  }, []);

  const handleOpenModal = useCallback(
    () => setIsModalOpen(state => !state),
    [],
  );

  return (
    <>
      <PageWrapper
        complement={<img src={formIllustration} alt="form illustration" />}
        animateOnModalOpen={isModalOpen}
      >
        <Form ref={formRef} as={UnForm} onSubmit={handleSubmit}>
          <FormTitle>Acesse sua conta</FormTitle>

          <FormControllers>
            <Input name="email" placeholder="Digite seu email" />

            <Input
              type="password"
              name="password"
              placeholder="Digite sua senha"
            />

            <FormLink onClick={handleOpenModal} textalign="right">
              Esqueci minha senha
            </FormLink>
          </FormControllers>

          <FormControllers>
            <Button icon={FiLogIn} fixedWidth>
              Entrar
            </Button>
            <FormLink as={Link} to="/registro" textalign="center">
              Não tem uma conta?
              {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
              <span> Crie sua conta</span>.
            </FormLink>
          </FormControllers>
        </Form>
      </PageWrapper>

      {isModalOpen && (
        <ForgotPasswordModal
          handleModalState={handleOpenModal}
          isOpen={isModalOpen}
        />
      )}
    </>
  );
};

export { SignIn };
