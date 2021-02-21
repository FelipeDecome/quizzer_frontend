import styled, { css } from 'styled-components';

interface IContainerProps {
  isUserNavigationOpen: boolean;
}

export const Greetings = styled.p`
  ${props => {
    const { pallete } = props.theme;

    return css`
      display: none;

      @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;

        font-size: 1.2rem;
        color: ${pallete.textComplement};

        span {
          font-size: 1.4rem;
          color: ${pallete.mainLight};
        }
      }

      @media (min-width: 992px) {
        font-size: 1.4rem;
        span {
          font-size: 1.6rem;
        }
      }
    `;
  }};
`;

export const UserAvatar = styled.button`
  ${props => {
    const { pallete, boxesShadow, transition } = props.theme;

    return css`
      width: 4.8rem;
      height: 4.8rem;
      overflow: hidden;
      border-radius: 50%;

      border: 2px solid ${pallete.mainLighter};

      ${transition([
        {
          property: 'border-color',
        },
      ])};

      &:hover {
        border-color: ${pallete.mainLight};
        ${boxesShadow};
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      @media (min-width: 1120px) {
        width: 6.4rem;
        height: 6.4rem;
      }
    `;
  }}
`;

export const UserNavigation = styled.ul`
  ${props => {
    const { pallete, transition, radius, boxesShadow } = props.theme;

    return css`
      opacity: 0;
      pointer-events: none;

      position: absolute;
      margin-top: -4rem;
      top: 7.2rem;
      right: 0;

      display: flex;
      flex-direction: column;

      border-radius: ${radius};
      background: ${pallete.complementsBoxes};
      border: 1px solid ${pallete.mainLighter};
      ${boxesShadow};
      ${transition([
        {
          property: 'margin-top',
        },
        { property: 'opacity' },
      ])};

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: -0.7rem;
        right: 1.7rem;

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

      @media (min-width: 1120px) {
        top: 9rem;
      }
    `;
  }};
`;

export const UserNavigationCloseButton = styled.li`
  ${props => {
    const { pallete, boxesShadow } = props.theme;

    return css`
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
    `;
  }};
`;

export const UserNavigationListItem = styled.li`
  ${props => {
    const { pallete } = props.theme;

    return css`
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

      @media (min-width: 992px) {
        a {
          font-size: 1.6rem;
          padding: 1rem 4rem;
        }
      }
    `;
  }};
`;

export const Container = styled.div<IContainerProps>`
  ${props => {
    const { isUserNavigationOpen } = props;
    const { pallete, boxesShadow } = props.theme;

    return css`
      position: relative;

      display: flex;

      ${isUserNavigationOpen &&
      css`
        ${UserNavigation} {
          opacity: 1;
          pointer-events: all;
          margin-top: 0;
        }

        ${UserAvatar} {
          border-color: ${pallete.mainLight};
          ${boxesShadow};
        }
      `};

      @media (min-width: 768px) {
        gap: 1.2rem;
      }

      @media (min-width: 992px) {
        gap: 1.6rem;
      }
    `;
  }};
`;
