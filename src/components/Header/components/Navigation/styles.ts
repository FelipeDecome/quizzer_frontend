import styled, { css } from 'styled-components';

interface IContainerProps {
  userLogged: boolean;
  isCollapsed: boolean;
}

export const MenuListItem = styled.li`
  ${props => {
    const { pallete, transition } = props.theme;

    return css`
      display: flex;

      a {
        width: 100%;
        text-align: center;

        padding: 1.6rem;
        letter-spacing: 0.2rem;
        ${transition([
          {
            property: 'color',
          },
          {
            property: 'background',
          },
        ])}

        &:hover {
          color: ${pallete.mainLight};
          background: ${pallete.mainLighter};
        }
      }

      @media (min-width: 992px) {
        a:hover {
          background: none;
        }
      }

      @media (min-width: 1120px) {
        a {
          font-size: 1.8rem;
        }
      }
    `;
  }}
`;

export const MenuList = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;

  @media (min-width: 992px) {
    width: auto;

    flex-direction: row;
    align-items: center;
    margin-bottom: 0;
    gap: 1.2rem;
  }

  @media (min-width: 1120px) {
    gap: 1.6rem;
  }
`;

export const MenuListItemSeparator = styled.li`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: ${props => props.theme.pallete.complementsDefault};
`;

export const Container = styled.nav<IContainerProps>`
  ${props => {
    const { userLogged, isCollapsed } = props;
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

      ${isCollapsed &&
      css`
        transform: translateX(0);
      `};

      ${!isCollapsed &&
      css`
        transform: translateX(100vw);
      `};

      @media (min-width: 768px) {
        top: 6.4rem;
        height: calc(100vh - 6.4rem);
        width: 48rem;

        ${isCollapsed &&
        css`
          transform: translateX(calc(100vw - 48rem));
        `};

        ${!isCollapsed &&
        css`
          transform: translateX(100vw);
        `};
      }

      @media (min-width: 768px) and (max-width: 991px) {
        box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
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

        ${userLogged &&
        css`
          margin-right: 3.2rem;

          ul ${MenuListItem}:first-child {
            a {
              color: ${pallete.mainLight};
              font-weight: 700;

              &:hover {
                color: ${pallete.main};
              }
            }
          }
        `};

        ${!userLogged &&
        css`
          gap: 3.2rem;
        `}
      }

      @media (min-width: 1120px) {
        ${userLogged
          ? css`
              margin-right: 4.8rem;
            `
          : css`
              gap: 4.8rem;
            `}
      }
    `;
  }}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.8rem;
  width: 90%;

  button {
    width: 60%;
  }

  &::before {
    content: '';
    width: 100%;
    height: 1px;
    background: ${props => props.theme.pallete.complementsDefault};
    margin-bottom: 1.6rem;
  }

  @media (min-width: 992px) {
    width: auto;
    flex-direction: row;

    button {
      width: auto;
    }

    &::before {
      display: none;
    }
  }
`;
