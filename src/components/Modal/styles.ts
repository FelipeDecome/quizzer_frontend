import { rgba } from 'polished';
import styled, { css } from 'styled-components';
import {
  FadeInAnimation,
  AppearFrom,
  LoadingAnimation,
} from '../../shared/styles/animations';

import {
  styleAbove,
  styleBelow,
  styleBetween,
} from '../../shared/styles/mixins/breakpoints';

interface IContainerProps {
  isOpen: boolean;
}

const Content = styled.section`
  width: 100%;

  ${styleBelow('SM')} {
    max-width: 26rem;
  }

  ${styleBetween('SM', 'MD')} {
    max-width: 34rem;
  }

  ${styleAbove('MD')} {
    max-width: 40rem;
  }
`;

const Complement = styled.section`
  ${styleBelow('LG')} {
    display: none;
  }
`;

const Container = styled.aside<IContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  ${styleAbove('LG')} {
    background: ${props => rgba(props.theme.colors.main.lighter, 0.6)};
  }

  ${props =>
    !props.isOpen &&
    css`
      visibility: hidden;
      pointer-events: none;
    `};

  &.modal-appear {
    animation: ${FadeInAnimation} 0.6s ease-in-out forwards;

    ${Content} {
      animation: ${AppearFrom.Left} 0.8s ease-in-out backwards;
    }

    ${Complement} {
      animation: ${AppearFrom.Right} 0.8s ease-in-out backwards;
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  background: ${props => props.theme.colors.background};
  border-radius: 0.8rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  ${styleAbove('LG')} {
    justify-content: space-between;

    padding: 0 9.6rem;
    height: 68rem;
    width: 112rem;
  }
`;

const ButtonClose = styled.button`
  position: absolute;
  top: 3.6rem;
  right: 3.6rem;
  display: flex;
  align-items: center;

  padding: 0.8rem;

  background: none;
  border: 0;
  color: ${props => props.theme.colors.main.light};
  transition: color 0.2s;

  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.main.default};
  }

  svg {
    height: 3.2rem;
    width: 3.2rem;
    stroke-width: 3;
  }
`;

const LoadingIconContainer = styled.div`
  display: flex;
  justify-content: center;

  svg {
    animation: ${FadeInAnimation} 0.4s ease-in-out,
      ${LoadingAnimation} 2s linear infinite;
    height: 6.4rem;
    width: 6.4rem;

    color: ${props => props.theme.colors.main.light};
  }
`;

export {
  Container,
  Wrapper,
  Content,
  Complement,
  ButtonClose,
  LoadingIconContainer,
};
