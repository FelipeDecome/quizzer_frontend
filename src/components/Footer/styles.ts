import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${props => {
    const { pallete } = props.theme;

    return css`
      margin-bottom: 2.4rem;

      display: flex;
      gap: 0.8rem;

      color: ${pallete.mainLighter};

      svg {
        width: 2.4rem;
        height: 2.4rem;
      }

      ${Credits} a,
      svg {
        color: ${pallete.textInColors};
      }
    `;
  }}
`;

export const Credits = styled.p`
  ${props => {
    const { pallete, transition, boxesShadow } = props.theme;

    return css`
      a {
        position: relative;

        ${transition([
          {
            property: 'color',
          },
          {
            property: 'margin-left',
            type: 'slow',
          },
        ])};

        &::before {
          content: '';
          position: absolute;
          z-index: -1;
          bottom: -15rem;

          width: 12rem;
          height: 12rem;
          background: ${pallete.main};
          opacity: 0;
          ${boxesShadow};

          ${transition([
            {
              property: 'bottom',
              type: 'slow',
            },
            {
              property: 'border-radius',
              type: 'slow',
            },
            {
              property: 'transform',
              type: 'slow',
            },
            {
              property: 'opacity',
              type: 'slow',
            },
          ])};
        }

        &:hover {
          margin-left: 3.2rem;

          &::before {
            bottom: -5rem;
            border-radius: 4rem 0 4rem 4rem;
            transform: rotate(-135deg);
            opacity: 1;
          }
        }
      }
    `;
  }}
`;
