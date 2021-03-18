import styled from 'styled-components';
import * as Font from '../../../../shared/styles/components/Fonts';
import {
  styleAbove,
  styleBelow,
} from '../../../../shared/styles/mixins/breakpoints';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  ${styleAbove('SM')} {
    gap: 5.4rem;
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  ${styleAbove('SM')} {
    gap: 1.6rem;
  }
`;

const Header = styled(Font.Title)`
  ${styleBelow('LG')} {
    text-align: center;
  }
`;

const Text = styled(Font.Paragraph)`
  span {
    color: ${props => props.theme.colors.main.light};
  }
`;

const HelperMessage = styled(Font.Complement)`
  text-align: center;

  a {
    color: ${props => props.theme.colors.main.light};
  }
`;

export { FormWrapper, FormSection, Header, Text, HelperMessage };
