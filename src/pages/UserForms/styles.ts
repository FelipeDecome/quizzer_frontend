import styled from 'styled-components';
import { ShakeAnimation } from '../../shared/styles/animations';
import * as Font from '../../shared/styles/components/Fonts';
import { styleAbove } from '../../shared/styles/mixins/breakpoints';

interface IFormLinkProps {
  textAlign?: 'left' | 'center' | 'right';
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4.8rem;

  ${styleAbove('SM')} {
    gap: 6.4rem;
  }
`;

const FormTitle = styled(Font.Title)`
  text-align: center;
  max-width: 26rem;

  ${styleAbove('SM')} {
    max-width: 34rem;
  }
`;

const FormDescription = styled(Font.Paragraph)`
  max-width: 26rem;

  ${styleAbove('SM')} {
    max-width: 34rem;
  }
`;

const FormLink = styled(Font.Complement)<IFormLinkProps>`
  text-align: ${props => props.textAlign || 'left'};

  transition: color 0.2s;

  cursor: pointer;

  &:hover {
    animation-name: ${ShakeAnimation};
    animation-duration: 0.4s;
    animation-timing-function: ease-in;

    color: ${props => props.theme.colors.text.titles};

    & span {
      color: ${props => props.theme.colors.main.default};
    }
  }

  & span {
    color: ${props => props.theme.colors.main.light};
  }
`;

const FormControllers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  ${styleAbove('SM')} {
    gap: 1.6rem;
  }
`;

export { Form, FormTitle, FormDescription, FormLink, FormControllers };
