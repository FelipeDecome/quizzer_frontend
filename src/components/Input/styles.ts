import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<IContainerProps>`
  ${props => {
    const { isFilled, isFocused } = props;
    const { pallete, boxesShadow, radius, transition } = props.theme;

    return css`
      display: flex;
      align-items: center;
      gap: 1.2rem;

      width: 28rem;
      height: 3.6rem;

      border: 1px solid ${pallete.complementsDefault};
      border-radius: ${radius};
      ${boxesShadow};
      ${transition([
        {
          property: 'border-color',
        },
      ])};

      & + & {
        margin-top: 0.8rem;
      }

      input {
        font-size: 1.2rem;
        border: 0;
        background: none;
        color: ${pallete.textDefault};
        ${transition([
          {
            property: 'color',
          },
        ])};

        &::placeholder {
          color: ${pallete.textComplement};
        }
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 3.6rem;
        height: 3.6rem;

        background: ${pallete.mainLight};
        border-radius: ${radius} 0 0 ${radius};
        ${transition([
          {
            property: 'background',
          },
        ])};

        svg {
          color: ${pallete.textInColors};
          ${transition([
            {
              property: 'color',
            },
          ])};
        }
      }

      ${isFocused &&
      css`
        border-color: ${pallete.mainLight};

        input {
          color: ${pallete.mainLight};
        }

        div {
          background: ${pallete.main};
        }
      `};

      ${isFilled &&
      css`
        div {
          background: ${pallete.main};
        }
      `};

      @media (min-width: 768px) {
        gap: 1.6rem;

        width: 34rem;
        height: 4.6rem;

        input {
          font-size: 1.4rem;
        }

        div {
          width: 4.6rem;
          height: 4.6rem;

          svg {
            font-size: 2rem;
          }
        }
      }
    `;
  }}
`;
