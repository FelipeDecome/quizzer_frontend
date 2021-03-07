import styled, { css } from 'styled-components';
import {
  FadeInAnimation,
  LoadingAnimation,
} from '../../shared/styles/animations';
import * as Fonts from '../../shared/styles/components/Fonts';
import { styleAbove } from '../../shared/styles/mixins/breakpoints';

interface IContainerProps {
  fixedWidth?: boolean;
  isLoading?: boolean;
}

const Container = styled.button<IContainerProps>`
  ${props => {
    const { theme, fixedWidth, isLoading } = props;
    const { colors } = theme;

    return css`
      height: 4.8rem;
      width: ${fixedWidth ? '26rem' : '100%'};

      background: ${colors.main.default};
      border: 1px solid transparent;
      border-radius: 0.8rem;
      transition: width 0.4s, background 0.2s;

      cursor: pointer;

      &:hover {
        background: ${colors.main.light};
      }

      ${styleAbove('SM')} {
        height: 6.4rem;
        width: ${fixedWidth ? '34rem' : '100%'};
      }

      ${isLoading &&
      css`
        width: 7.6rem;

        background: ${colors.main.light};

        ${styleAbove('SM')} {
          width: 10.8rem;
        }
      `};
    `;
  }};
`;

const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  opacity: 0;

  animation-name: ${FadeInAnimation};
  animation-duration: 0.4s;
  animation-delay: 0.2s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
`;

const Text = styled(Fonts.SubTitle)`
  color: ${props => props.theme.colors.text.inColors};
`;

const StyledIcon = styled.svg`
  height: 2rem;
  width: 2rem;

  color: ${props => props.theme.colors.text.inColors};

  ${styleAbove('SM')} {
    height: 2.8rem;
    width: 2.8rem;
  }
`;

const StyledLoadingIcon = styled.svg`
  height: 2.8rem;
  width: 2.8rem;

  animation-name: ${LoadingAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;

  color: ${props => props.theme.colors.text.inColors};

  ${styleAbove('SM')} {
    height: 3.6rem;
    width: 3.6rem;
  }
`;

export { Container, AnimationContainer, Text, StyledIcon, StyledLoadingIcon };
