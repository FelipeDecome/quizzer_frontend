import styled, { css } from 'styled-components';

interface INavDefaultProps {
  navigationState: boolean;
}

export const Container = styled.header<INavDefaultProps>`
  ${props => {
    const { navigationState } = props;
    const { pallete, boxesShadow, transition } = props.theme;

    return css`
      width: 100vw;
      background: ${pallete.complementsBoxes};
      border-bottom: 4px solid ${pallete.mainLight};
      ${boxesShadow};
      z-index: 2;

      > div {
        position: relative;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 6.4rem;
        width: 90%;
        max-width: 112rem;
        padding: 0 2.4rem;
      }

      @media (min-width: 768px) {
        &::before {
          content: '';
          position: absolute;
          width: 100%;
          height: calc(100vh - 6.4rem);
          top: 6.4rem;
          left: 0;

          background: ${pallete.mainLight};
          opacity: 0;
          pointer-events: none;
          ${transition([
            {
              property: 'opacity',
              type: 'slow',
            },
          ])}

          ${navigationState &&
          css`
            opacity: 0.8;
            pointer-events: all;
          `};
        }

        > div {
          padding: 0 4.4rem;
        }
      }

      @media (min-width: 992px) {
        &::before {
          display: none;
        }
      }

      @media (min-width: 1120px) {
        > div {
          height: 9rem;
          padding: 0;
        }
      }
    `;
  }}
`;

export const HeaderLeft = styled.div`
  ${() => {
    return css`
      display: flex;
      align-items: center;
      gap: 1.6rem;

      > img#logo {
        width: 3.2rem;
        height: 3.2rem;
      }

      > img#brand {
        display: none;
      }

      @media (min-width: 768px) {
        gap: 2rem;

        > img#brand {
          display: initial;
          height: 1.8rem;
        }
      }

      @media (min-width: 1120px) {
        gap: 2.4rem;

        > img#logo {
          width: 4.8rem;
          height: 4.8rem;
        }

        > img#brand {
          height: 2.4rem;
        }
      }
    `;
  }}
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (min-width: 992px) {
    gap: 0;
  }
`;
