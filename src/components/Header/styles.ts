import styled, { css } from 'styled-components';

export type TNavState = 'open' | 'closed';

interface INavDefaultProps {
  state: TNavState;
}

interface INavigationProps extends INavDefaultProps {
  userLogged?: boolean;
}

interface ILoggedUserProps {
  userNavigationState: TNavState;
}

export const Container = styled.div`
  ${props => {
    const { pallete, boxesShadow } = props.theme;

    return css`
      background: ${pallete.complementsBoxes};
      border-bottom: 4px solid ${pallete.mainLight};
      ${boxesShadow};

      > div {
        position: relative;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 6.4rem;
        max-width: 112rem;
        padding: 0 2.4rem;
      }

      @media (min-width: 768px) {
        > div {
          padding: 0 4.4rem;
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
  ${props => {
    const { pallete } = props.theme;

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

      > a {
        display: flex;
        align-items: center;
        gap: 0.4rem;

        padding: 0.4rem 0;

        font-size: 1.2rem;
        color: ${pallete.textComplement};

        /* divider */
        &::before {
          content: '';
          width: 1px;
          height: 2.4rem;
          margin-right: 0.8rem;

          background: ${pallete.complementsDefault};
        }

        &:hover {
          color: ${pallete.textDefault};
        }
      }

      @media (min-width: 768px) {
        gap: 2rem;

        > img#brand {
          display: initial;
          height: 1.8rem;
        }

        > a {
          font-size: 1.4rem;
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

        > a {
          font-size: 1.6rem;
        }
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

export const Navigation = styled.nav<INavigationProps>`
  ${props => {
    const { state, userLogged } = props;
    const { pallete, transition } = props.theme;

    return css`
      position: absolute;
      top: 6rem;
      left: 0;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      width: 100vw;
      height: calc(100vh - 6rem);
      background: ${pallete.complementsBoxes};
      border-top: 1px solid ${pallete.complementsDefault};

      ${transition([
        {
          property: 'transform',
          type: 'slow',
        },
      ])};

      ${state === 'open' &&
      css`
        transform: translateX(0);
      `};

      ${state === 'closed' &&
      css`
        transform: translateX(100vw);
      `};

      > ul {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 1.6rem;

        ${userLogged && css``};

        li {
          display: flex;

          ${userLogged &&
          css`
            &:first-child {
              a {
                color: ${pallete.mainLight};

                &:hover {
                  color: ${pallete.main};
                }
              }
            }
          `};

          a {
            padding: 0.8rem 1.6rem;
            letter-spacing: 0.2rem;

            &:hover {
              color: ${pallete.mainLight};
            }
          }
        }

        span {
          display: none;
        }
      }

      div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 0.8rem;

        &::before {
          content: '';
          width: 100%;
          height: 1px;
          background: ${pallete.complementsDefault};
          margin-bottom: 0.8rem;
        }
      }

      @media (min-width: 768px) {
        top: 6.4rem;
        height: calc(100vh - 8.6rem);
        width: 36rem;

        ${state === 'open' &&
        css`
          transform: translateX(calc(100vw - 36rem));
        `};

        ${state === 'closed' &&
        css`
          transform: translateX(100vw);
        `};
      }

      @media (min-width: 992px) {
        /* Mobile reset */
        position: initial;
        flex-direction: row;
        width: auto;
        height: auto;
        transform: none;
        background: none;
        border-top: 0;

        ul {
          flex-direction: row;
          margin-bottom: 0;
        }

        div {
          flex-direction: row;

          &::before {
            display: none;
          }
        }

        /* styles desktop */
        ${userLogged
          ? css`
              margin-right: 3.2rem;
            `
          : css`
              gap: 3.2rem;
            `}

        ul {
          gap: 1.2rem;

          span {
            display: initial;
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 50%;
            background: ${pallete.complementsDefault};
          }
        }
      }

      @media (min-width: 1120px) {
        ${userLogged
          ? css`
              margin-right: 4.8rem;
            `
          : css`
              gap: 4.8rem;
            `}

        ul {
          gap: 1.6rem;

          li a {
            font-size: 1.8rem;
          }
        }
      }
    `;
  }}
`;

export const LoggedUser = styled.button<ILoggedUserProps>`
  ${props => {
    const { userNavigationState } = props;
    const { pallete, boxesShadow, transition } = props.theme;

    return css`
      display: flex;
      align-items: center;
      gap: 1.6rem;

      cursor: pointer;

      > p {
        display: none;
      }

      > div {
        display: flex;
        align-items: center;
        position: relative;

        img {
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid ${pallete.mainLighter};
          ${transition([
            {
              property: 'border-color',
            },
            {
              property: 'transform',
            },
          ])};

          ${userNavigationState === 'open' &&
          css`
            ${boxesShadow}
            border-color: ${pallete.mainLight};
            transform: scale(1.05);
          `};

          &:hover:not() {
            ${boxesShadow}
            border-color: ${pallete.mainLight};
            transform: scale(1.05);
          }
        }
      }

      @media (min-width: 768px) {
        gap: 2rem;

        > p {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: right;

          font-size: 1.2rem;
          font-weight: 400;
          color: ${pallete.textComplement};

          a {
            font-size: 1.4rem;
            color: ${pallete.main};

            &:hover {
              color: ${pallete.mainLight};
            }
          }
        }

        > div img {
          width: 4.8rem;
          height: 4.8rem;
        }
      }

      @media (min-width: 1120px) {
        gap: 2.4rem;

        > div img {
          width: 6.4rem;
          height: 6.4rem;
        }
      }
    `;
  }}
`;

export const UserNavigation = styled.ul<INavDefaultProps>`
  ${props => {
    const { state } = props;
    const { pallete, boxesBorderRadius, boxesShadow, transition } = props.theme;

    return css`
      position: absolute;
      margin-top: -2rem;
      top: 4.8rem;
      right: 0;
      display: flex;
      flex-direction: column;
      opacity: 0;
      pointer-events: none;

      background: ${pallete.complementsBoxes};
      border: 1px solid ${pallete.mainLighter};
      ${boxesBorderRadius};
      ${boxesShadow};
      ${transition([
        {
          property: 'margin-top',
        },
        { property: 'opacity' },
      ])};

      ${state === 'open' &&
      css`
        pointer-events: all;

        margin-top: 1.2rem;
        opacity: 1;
      `}

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: -0.7rem;
        right: 1.4rem;

        width: 1.2rem;
        height: 1.2rem;

        transform: rotate(45deg);
      }

      &::before {
        background: ${pallete.mainLighter};
      }

      &::after {
        background: ${pallete.complementsBoxes};
        top: -0.55rem;
      }

      li {
        &:first-child {
          position: absolute;
          bottom: -4rem;

          display: flex;
          justify-content: center;
          align-items: center;

          width: 100%;
          font-size: 1.6rem;

          button {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.8rem;

            color: ${pallete.textDefault};
            background: ${pallete.complementsBoxes};
            border-radius: 50%;
            border: 1px solid ${pallete.mainLighter};
            ${boxesShadow};
            cursor: pointer;

            &:hover {
              background: ${pallete.mainLighter};
            }
          }
        }

        a {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          white-space: nowrap;

          padding: 0.8rem 3.2rem;

          font-size: 1.4rem;
          font-weight: 400;

          color: ${pallete.textComplement};

          svg {
            font-size: 1.6rem;
            color: ${pallete.textDefault};
          }

          &:hover {
            color: ${pallete.mainLight};

            svg {
              color: inherit;
            }
          }
        }

        &:last-child a {
          border-top: 1px solid ${pallete.complementsDefault};
        }
      }

      @media (min-width: 768px) {
        &::before,
        &::after {
          right: 1.8rem;
        }
      }

      @media (min-width: 992px) {
        top: 5.4rem;

        li a {
          font-size: 1.6rem;
          padding: 0.8rem 3.6rem;
        }
      }

      @media (min-width: 1120px) {
        top: 7.2rem;

        &::before,
        &::after {
          right: 2.4rem;
        }
      }
    `;
  }}
`;

export const HamburguerIcon = styled.button<INavDefaultProps>`
  ${props => {
    const { state } = props;
    const { pallete, transition } = props.theme;

    return css`
      padding: 0.7rem 0.4rem;
      margin-right: -0.4rem; /* Alignment fix */

      border: 0;
      background: none;
      cursor: pointer;

      > ul {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 0.6rem;
        list-style: none;

        li {
          width: 2.4rem;
          height: 0.2rem;

          border-radius: 0.1rem;
          background: ${pallete.main};

          ${transition([
            { property: 'transform', type: 'slow' },
            { property: 'background' },
          ])},
        }
      }

      ${state === 'open' &&
      css`
        > ul > li {
          &:first-child {
            transform: translateY(0.8rem) rotate(45deg);
          }

          &:nth-child(2) {
            opacity: 0;
          }

          &:last-child {
            transform: translateY(-0.8rem) rotate(-45deg);
          }
        }
      `}

      &:hover ul li {
        backgound: ${pallete.mainLight};
      }

      @media (min-width: 962px) {
        display: none;
      }
    `;
  }}
`;
