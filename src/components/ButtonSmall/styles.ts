import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export type TButtonType = 'default' | 'main';

interface IContainerProps {
  colorScheme: TButtonType;
  iconLeft?: boolean;
}

export const Container = styled.button<IContainerProps>`
  ${props => {
    const { theme, iconLeft, colorScheme } = props;
    const { pallete, transition, boxesBorderRadius, boxesShadow } = theme;

    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;

      height: 4.8rem;
      padding: 0 2.4rem;

      font-size: 1.4rem;
      letter-spacing: 0.2rem;
      font-weight: 700;

      color: ${pallete.textDefault};
      border: 1px solid ${pallete.complementsDefault};
      ${boxesBorderRadius};
      ${boxesShadow};
      cursor: pointer;

      ${transition([
        { property: 'color' },
        { property: 'border-color' },
        { property: 'background' },
      ])};

      ${iconLeft &&
      css`
        flex-direction: row-reverse;
      `};

      &:hover {
        color: ${pallete.textTitles};
        border-color: ${pallete.textComplement};
      }

      ${colorScheme === 'main' &&
      css`
        color: ${pallete.textInColors};

        background: ${lighten(0.05, pallete.main)};
        border-color: ${pallete.main};

        &:hover {
          background: ${pallete.main};
          color: ${pallete.textInColors};
          border-color: ${pallete.main};
        }
      `};

      svg {
        margin-top: 1px; /* Alignment fix */
      }

      @media (min-width: 1120px) {
        font-size: 1.6rem;
        padding: 0 3.2rem;
      }
    `;
  }}
`;
