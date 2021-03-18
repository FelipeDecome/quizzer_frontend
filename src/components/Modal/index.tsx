import React, { useEffect, useRef, useState } from 'react';
import { FiLoader, FiX } from 'react-icons/fi';
import { useApp } from '../../hooks';

import {
  Container,
  Wrapper,
  Content,
  Complement,
  ButtonClose,
  LoadingIconContainer,
} from './styles';

interface IModalProps {
  modalState: boolean;
  handleModalState: () => void;
  complement?: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({
  modalState,
  handleModalState,
  complement,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [animationState, setAnimationState] = useState('');

  const { isLoading } = useApp();

  useEffect(() => {
    setIsOpen(modalState);
  }, [modalState]);

  useEffect(() => {
    setAnimationState('modal-appear');
    const timeoutId = setTimeout(() => {
      setAnimationState('');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Container ref={modalRef} className={animationState} isOpen={isOpen}>
      <Wrapper>
        <Content>
          {!isLoading ? (
            children
          ) : (
            <LoadingIconContainer>
              <FiLoader />
            </LoadingIconContainer>
          )}
        </Content>
        <Complement>{complement}</Complement>

        <ButtonClose onClick={handleModalState} type="button">
          <FiX />
        </ButtonClose>
      </Wrapper>
    </Container>
  );
};

export default Modal;
