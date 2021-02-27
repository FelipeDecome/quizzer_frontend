import styled, { css, keyframes } from 'styled-components';
import Input from '../../components/Input';

interface IFormTextProps {
  textAlign?: 'left' | 'center' | 'right';
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.h1<IFormTextProps>`
  font-size: 2.8rem;
  font-weight: 700;

  margin-bottom: 2.8rem;
  /* text-align: center; */
  color: ${props => props.theme.pallete.textTitles};

  span {
    color: ${props => props.theme.pallete.main};
  }

  @media (min-width: 768px) {
    font-size: 3.6rem;
    margin-bottom: 3.6rem;
  }

  @media (min-width: 992px) {
    ${props =>
      props.textAlign &&
      css`
        text-align: ${props.textAlign};
      `};
  }
`;

export const FormText = styled.p<IFormTextProps>`
  margin-bottom: 1.6rem;

  @media (min-width: 768px) {
    margin-bottom: 2.4rem;
  }

  @media (min-width: 992px) {
    ${props =>
      props.textAlign &&
      css`
        text-align: ${props.textAlign};
      `};
  }
`;

export const FormInput = styled(Input);

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 4.8rem;

  @media (min-width: 768px) {
    margin-bottom: 6.4rem;
  }
`;

const LinkHoverAnimation = keyframes`
  30% {
    transform: translateX(-.6rem);
  }
  70% {
    transform: translateX(.4rem);
  }
  100%{
    transform: translateX(0);
  }
`;

export const FormLink = styled.a<IFormTextProps>`
  ${props => {
    const { textAlign } = props;
    const { pallete, transition } = props.theme;

    return css`
      ${textAlign &&
      css`
        text-align: ${textAlign};
      `}

      margin-top: 0.8rem;
      cursor: pointer;

      span {
        color: ${pallete.mainLight};
      }

      &,
      span {
        ${transition([
          {
            property: 'color',
          },
        ])}
      }

      &:hover {
        animation-name: ${LinkHoverAnimation};
        animation-duration: 0.6s;
        color: ${pallete.textTitles};

        span {
          color: ${pallete.main};
        }
      }
    `;
  }};
`;
