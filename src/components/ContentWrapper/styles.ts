import styled, { css, keyframes } from 'styled-components';

const AnimateOnLoadFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-8rem);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AnimateOnLoadFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(8rem);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  animation-name: ${AnimateOnLoadFromLeft};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

export const Complement = styled.div`
  animation-name: ${AnimateOnLoadFromRight};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

export const Container = styled.div`
  ${props => {
    const { pallete, radius, boxesShadow } = props.theme;

    return css`
      width: 80%;
      height: 48rem;
      padding: 0 10%;

      display: flex;
      align-items: center;
      justify-content: center;

      background: ${pallete.complementsBoxes};
      border-radius: ${radius};
      ${boxesShadow};

      overflow: hidden;

      ${Complement} {
        display: none;
      }

      @media (min-width: 768px) {
        width: 56rem;
        height: 68rem;
        padding: 0 11rem;
      }

      @media (min-width: 1120px) {
        width: 90%;
        max-width: 112rem;
        padding: 0 6.4rem;
        gap: 20rem;

        ${Complement} {
          display: initial;
        }
      }
    `;
  }}
`;
