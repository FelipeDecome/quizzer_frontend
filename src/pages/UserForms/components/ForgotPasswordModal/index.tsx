import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Form as UnForm } from '@unform/web';
import { FormHandles } from '@unform/core';
import Modal from '../../../../components/Modal';
import {
  FormWrapper,
  Text,
  Header,
  FormSection,
  HelperMessage,
} from './styles';

import illustrationSvg from '../../../../assets/images/illustration.svg';

import states from './states.json';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import { useApp } from '../../../../hooks';

interface IForgotPasswordModal {
  isOpen: boolean;
  handleModalState: () => void;
}

interface IAttempt {
  header: string;
  description: {
    text: string;
    highlight?: string;
    complement?: string;
  };
  input?: boolean;
  buttonParagraph?: string;
  buttonText?: string;
  helperMessage?: {
    text: string;
    link: string;
    complement?: string;
  };
}

const ForgotPasswordModal: React.FC<IForgotPasswordModal> = ({
  isOpen,
  handleModalState,
}) => {
  const formRef = useRef<FormHandles>(null);
  const [attempt, setAttempt] = useState(0);

  const { setLoading } = useApp();

  const state: IAttempt = useMemo(() => states[attempt], [attempt]);

  const handleStateChange = useCallback(() => {
    setLoading();

    setAttempt(oldState => {
      if (oldState < 4) return oldState + 1;
      return oldState;
    });

    setTimeout(() => setLoading(), 1000);
  }, [setLoading]);

  return (
    <Modal
      handleModalState={handleModalState}
      complement={<img src={illustrationSvg} alt="Esqueci minha senha" />}
      modalState={isOpen}
    >
      <FormWrapper ref={formRef} as={UnForm} onSubmit={() => undefined}>
        <Header>{state.header}</Header>
        <FormSection>
          <Text>
            {state.description.text}
            {!!state.description.highlight && (
              <span>
                &nbsp;
                {state.description.highlight}
              </span>
            )}
            {state.description.complement}
          </Text>
          {state.input && <Input name="email" placeholder="Digite seu email" />}
        </FormSection>

        <FormSection>
          {!!state.buttonParagraph && <Text>{state.buttonParagraph}</Text>}
          {!!state.buttonText && (
            <Button onClick={handleStateChange}>{state.buttonText}</Button>
          )}
          {!!state.helperMessage && (
            <HelperMessage>
              {state.helperMessage?.text}
              <a href="/">
                &nbsp;
                {state.helperMessage.link}
              </a>
              {state.helperMessage.complement}
            </HelperMessage>
          )}
        </FormSection>
      </FormWrapper>
    </Modal>
  );
};

export default ForgotPasswordModal;
