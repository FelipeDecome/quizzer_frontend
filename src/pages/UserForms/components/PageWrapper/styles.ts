import styled from 'styled-components';
import {
  styleAbove,
  styleBeetween,
} from '../../../../shared/styles/mixins/breakpoints';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  ${styleBeetween('SM', 'MD')} {
    position: relative;
  }
`;

const Content = styled.div``;

const Complement = styled.div`
  display: none;

  ${styleAbove('SM')} {
    display: initial;
  }

  ${styleBeetween('SM', 'MD')} {
    position: absolute;
    top: 0;
    height: 40%;

    z-index: -1;
    img {
      width: 100vw;
      height: 100%;
      object-fit: cover;
      object-position: bottom;
    }
  }
`;

export { Container, Content, Complement };
