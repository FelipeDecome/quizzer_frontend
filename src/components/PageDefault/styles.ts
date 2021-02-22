import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 100vh;
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
      right: 0;
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
