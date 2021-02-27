import styled, { css, keyframes } from 'styled-components';
import Input from '../../components/Input';

interface IFormLinkProps {
  textAlign?: 'left' | 'center' | 'right';
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.form`
  font-size: 4.8rem;
  font-weight: 700;

  margin-bottom: 4.8rem;
  text-align: center;
`;

export const FormInput = styled(Input);

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 3.2rem;

  @media (min-width: 768px) {
    margin-bottom: 3.6rem;
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

export const FormLink = styled.a<IFormLinkProps>`
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
