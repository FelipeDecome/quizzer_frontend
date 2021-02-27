import React, { useCallback, useRef } from 'react';
import { Form as UnForm } from '@unform/web';

import { FiCheckCircle, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import ContentWrapper from '../../../components/ContentWrapper';
import PageDefault from '../../../components/PageDefault';
import { Form, FormText, FormTitle, InputsContainer } from '../styles';

import illustrationSVG from '../../../assets/images/illustration.svg';
import Input from '../../../components/Input';
import ButtonSmall from '../../../components/ButtonSmall';

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => undefined, []);

  return (
    <PageDefault>
      <ContentWrapper
        complement={<img src={illustrationSVG} alt="illustration" />}
      >
        <Form ref={formRef} as={UnForm} onSubmit={handleSubmit}>
          <FormTitle textAlign="left">Escolha uma nova senha!</FormTitle>

          <FormText textAlign="left">
            Falta pouquinho para alterar sua senha, agora digite sua nova senha.
          </FormText>

          <InputsContainer>
            <Input
              name="password"
              icon={FiLock}
              placeholder="Digite sua nova senha"
            />
            <Input
              name="password_confirmation"
              icon={FiCheckCircle}
              placeholder="Confirme sua nova senha"
            />
          </InputsContainer>

          <ButtonSmall colorScheme="main">Recuperar minha senha</ButtonSmall>
        </Form>
      </ContentWrapper>
    </PageDefault>
  );
};

export default ResetPassword;
