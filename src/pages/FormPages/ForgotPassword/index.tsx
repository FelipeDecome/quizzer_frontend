import React, { useCallback, useRef } from 'react';
import { Form as UnForm } from '@unform/web';

import { FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import ContentWrapper from '../../../components/ContentWrapper';
import PageDefault from '../../../components/PageDefault';
import { Form, FormText, FormTitle, InputsContainer } from '../styles';

import illustrationSVG from '../../../assets/images/illustration.svg';
import Input from '../../../components/Input';
import ButtonSmall from '../../../components/ButtonSmall';

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => undefined, []);

  return (
    <PageDefault>
      <ContentWrapper
        complement={<img src={illustrationSVG} alt="illustration" />}
        complementRight
      >
        <Form ref={formRef} as={UnForm} onSubmit={handleSubmit}>
          <FormTitle textAlign="right">Esqueceu sua senha?</FormTitle>

          <FormText textAlign="right">
            Informe seu email para que possamos enviar as instruções para criar
            uma nova senha.
          </FormText>

          <InputsContainer>
            <Input name="email" icon={FiMail} placeholder="Digite seu email" />
          </InputsContainer>

          <ButtonSmall colorScheme="main">Recuperar minha senha</ButtonSmall>
        </Form>
      </ContentWrapper>
    </PageDefault>
  );
};

export default ForgotPassword;
