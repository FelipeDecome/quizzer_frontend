import { rgba } from 'polished';
import styled, { css } from 'styled-components';
import { FadeInAnimation } from '../../shared/styles/animations';
import { Complement, Span } from '../../shared/styles/components/Fonts';
import { styleAbove } from '../../shared/styles/mixins/breakpoints';

interface IContainerProps {
  hasError: boolean;
  isFocused: boolean;
  isFilled: boolean;
}

interface IInputProps {
  isInvalid: boolean;
}

const Container = styled.div<IContainerProps>`
  ${props => {
    const { theme, isFocused, isFilled, hasError } = props;
    const { colors } = theme;

    return css`
      height: 4rem;
      width: 26rem;

      display: flex;
      align-items: center;

      background: ${colors.boxes};
      border: 1px solid ${colors.complement.default};
      border-radius: 0.8rem;

      transition: border-color 0.2s, box-shadow 0.2s;

      ${styleAbove('SM')} {
        height: 6rem;
        width: 34rem;
      }

      ${isFilled &&
      css`
        border-color: ${colors.main.lighter};
      `};

      ${isFocused &&
      css`
        border-color: ${colors.main.light};
        box-shadow: 0 0 4px 2px ${rgba(colors.main.light, 0.2)};
      `};

      ${hasError &&
      css`
        border-color: ${colors.error.light};
        box-shadow: none;
      `};

      ${hasError &&
      isFocused &&
      css`
        border-color: ${colors.error.default};
        box-shadow: 0 0 4px 2px ${rgba(colors.error.default, 0.2)};
      `};

      ${hasError &&
      isFilled &&
      css`
        border-color: ${colors.error.light};
      `};
    `;
  }};
`;

const StyledInput = styled(Complement)<IInputProps>`
  ${props => {
    const { theme, isInvalid } = props;
    const { colors } = theme;

    return css`
      flex: 1;

      height: 100%;
      padding-left: 1.2rem;

      color: inherit;
      background: none;
      border: 0;
      transition: color 0.2s;

      ${styleAbove('SM')} {
        padding-left: 0 1.6rem;
      }

      &:focus,
      &:valid {
        color: ${colors.main.light};
      }

      ${isInvalid &&
      css`
        &:focus,
        &:valid {
          color: ${colors.error.default};
        }
      `};
    `;
  }}
`;

const ErrorContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  height: 100%;
  padding: 0 1.2rem;

  ${styleAbove('SM')} {
    padding: 0 1.6rem;
  }

  cursor: help;
`;

const ErrorIcon = styled.svg`
  height: 1.8rem;
  width: 1.8rem;

  color: ${props => props.theme.colors.error.light};
  transition: color 0.2s;

  animation-name: ${FadeInAnimation};
  animation-duration: 0.2s;

  ${styleAbove('SM')} {
    height: 2.4rem;
    width: 2.4rem;
  }

  input:focus + div & {
    color: ${props => props.theme.colors.error.default};
  }
`;

const ErrorMessage = styled(Span)`
  display: none;
  position: absolute;
  top: -2.8rem;
  right: 0;

  padding: 0.6rem 2rem;

  animation-name: ${FadeInAnimation};
  animation-duration: 0.2s;
  color: ${props => props.theme.colors.text.inColors};
  background: ${props => props.theme.colors.error.default};
  border: 1px solid ${props => props.theme.colors.error.light};
  border-radius: 0.8rem;

  white-space: nowrap;

  div:hover > & {
    display: initial;
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    right: 1.6rem;

    height: 0.8rem;
    width: 0.8rem;
    transform: rotate(45deg);
  }

  &::after {
    background: ${props => props.theme.colors.error.default};
    bottom: -0.35rem;
  }

  &::before {
    background: ${props => props.theme.colors.error.light};
    bottom: -0.5rem;
  }

  ${styleAbove('SM')} {
    top: -3.2rem;
    padding: 0.8rem 3.2rem;

    &::after,
    &::before {
      right: 2.3rem;
    }
  }
`;

export { Container, StyledInput, ErrorContainer, ErrorIcon, ErrorMessage };
