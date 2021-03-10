import styled from 'styled-components';
import {
  styleAbove,
  styleBetween,
  styleBelow,
} from '../../../../shared/styles/mixins/breakpoints';

interface IContainerProps {
  contentLeft: boolean;
}

const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;

  height: 100%;
  width: 100%;

  ${styleBelow('LG')} {
    justify-content: center;
  }

  ${styleAbove('LG')} {
    margin: 0 auto;
    ${props => props.contentLeft && `flex-direction: row-reverse;`};
  }

  ${styleAbove('XL')} {
    max-width: 1120px;
    gap: 16.8rem;
  }
`;

const Content = styled.div`
  ${styleBetween('LG', 'XL')} {
    padding: 12rem;
  }
`;

const Complement = styled.div`
  img {
    height: 100%;
    object-fit: cover;
    object-position: bottom;
  }

  ${styleBelow('LG')} {
    display: none;
  }

  ${styleAbove('LG')} {
    height: 100vh;
  }
`;

export { Container, Content, Complement };
