import styled from 'styled-components';
import {
  styleAbove,
  styleBetween,
  styleBelow,
} from '../../../../shared/styles/mixins/breakpoints';

const Container = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
  width: 100%;

  ${styleBelow('LG')} {
    justify-content: center;
  }

  ${styleBetween('SM', 'LG')} {
    position: relative;
  }

  ${styleAbove('LG')} {
    margin: 0 auto;
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

  ${styleBelow('SM')} {
    display: none;
  }

  ${styleBetween('SM', 'LG')} {
    position: absolute;
    top: 0;
    height: 40%;

    z-index: -1;
    img {
      width: 100vw;
    }
  }

  ${styleAbove('LG')} {
    height: 100vh;
  }
`;

export { Container, Content, Complement };
