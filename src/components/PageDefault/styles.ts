import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  min-height: 81.2rem;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 102.4rem;
  }
`;

export const Background = styled.div`
  ${props => {
    const { pallete } = props.theme;

    return css`
      bottom: 0;
      position: fixed;
      width: 100%;
      height: 100%;

      overflow: hidden;
      z-index: -1;

      display: flex;
      justify-content: center;

      &::after {
        content: '';
        position: absolute;
        width: 200%;
        height: 60rem;
        bottom: -28rem;

        transform: rotate(-10deg);
        background: ${pallete.mainLight};
      }
    `;
  }}
`;

export const Content = styled.main`
  ${props => {
    const { pallete, radius, boxesShadow } = props.theme;

    return css`
      width: 34rem;
      height: 48rem;

      display: flex;
      align-items: center;

      background: ${pallete.complementsBoxes};
      border-radius: ${radius};
      ${boxesShadow};

      overflow: hidden;

      @media (min-width: 768px) {
        width: 56rem;
        height: 68rem;
      }

      @media (min-width: 992px) {
        width: 56rem;
        height: 68rem;
      }
    `;
  }}
`;
