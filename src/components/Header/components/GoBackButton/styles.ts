import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${props => {
    const { pallete, transition } = props.theme;

    return css`
      display: flex;
      align-items: center;

      button {
        padding: 0.4rem 0;

        font-size: 1.2rem;
        letter-spacing: 0.4rem;
        color: ${pallete.textComplement};

        svg {
          opacity: 0;
          ${transition([
            {
              property: 'opacity',
            },
            {
              property: 'margin',
            },
          ])}
        }

        &:hover {
          color: ${pallete.textDefault};

          svg {
            margin: 0 0.8rem;

            opacity: 1;
          }
        }
      }

      /* divider */
      &::before {
        content: '';
        width: 1px;
        height: 2.4rem;
        margin-right: 0.8rem;

        background: ${pallete.complementsDefault};
      }

      @media (min-width: 768px) {
        font-size: 1.4rem;
      }
    `;
  }};
`;
