import styled, { css } from 'styled-components';
import Input from '../../components/Input';

export const StyledForm = styled.form`
  ${props => {
    const { pallete } = props.theme;

    return css`
      h1 + ${FormInput} {
        margin-top: 4.8rem;
      }
    `;
  }};
`;

export const FormInput = styled(Input);
