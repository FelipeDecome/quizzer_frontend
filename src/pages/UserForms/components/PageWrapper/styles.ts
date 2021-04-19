import styled, { css } from 'styled-components';
import * as AppearFrom from '../../../../shared/styles/animations/AppearFrom';
import {
  styleAbove,
  styleBetween,
  styleBelow,
} from '../../../../shared/styles/mixins/breakpoints';

interface IContainerProps {
  contentRight: boolean;
  animateOnModalOpen: boolean;
}

interface IAnimationContainer {
  appearFrom: 'left' | 'right';
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
    ${props => props.contentRight && `flex-direction: row-reverse;`};
  }

  ${styleAbove('XL')} {
    max-width: 1120px;
    gap: 16.8rem;
  }

  transition: transform 0.4s ease-in-out;
  ${props =>
    props.animateOnModalOpen &&
    css`
      transform: scale(0.8);
      transition-duration: 0.6s;
    `};
`;

const Content = styled.div`
  ${styleBetween('LG', 'XL')} {
    padding: 12rem;
  }
`;

const AnimationContainer = styled.div<IAnimationContainer>`
  animation-name: ${AppearFrom.Up};
  animation-duration: 1s;

  ${styleAbove('LG')} {
    animation-name: ${props =>
      props.appearFrom === 'left' ? AppearFrom.Left : AppearFrom.Right};
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

export { Container, Content, AnimationContainer, Complement };
