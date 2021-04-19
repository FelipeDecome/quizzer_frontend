import { useField } from '@unform/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import {
  Container,
  ErrorContainer,
  ErrorIcon,
  ErrorMessage,
  StyledInput,
} from './styles';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
}

const Input: React.FC<IInputProps> = ({ name, type, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { registerField, fieldName, error } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(
    () =>
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
      }),
    [registerField, fieldName],
  );

  return (
    <Container hasError={!!error} isFocused={isFocused} isFilled={isFilled}>
      <StyledInput
        name={name}
        type={type || 'text'}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isInvalid={!!error}
        ref={inputRef}
        as="input"
        {...rest}
      />

      {error && (
        <ErrorContainer>
          <ErrorIcon as={FiAlertCircle} />
          <ErrorMessage>{error}</ErrorMessage>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default Input;
