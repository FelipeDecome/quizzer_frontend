import styled, { css } from 'styled-components';

interface IContainer {
  isActive: boolean;
}

export const Container = styled.button<IContainer>`
  ${props => {
    const { isActive } = props;
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
          background: ${pallete.mainLight};

          ${transition([
            { property: 'transform', type: 'slow' },
            { property: 'background' },
            { property: 'opacity' },
          ])},
        }
      }

      ${isActive &&
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
        background: ${pallete.main};
      }

      @media (min-width: 992px) {
        display: none;
      }
    `;
  }}
`;
