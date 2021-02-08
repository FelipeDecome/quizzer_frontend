import { css, DefaultTheme } from 'styled-components';

export const light: DefaultTheme = {
  pallete: {
    background: '#F3F3F3',
    backgroundDetail: '#F7F7F7',

    main: '#F42A66',
    mainLight: '#FF80A6',
    mainLighter: '#FACFDC',

    textDefault: '#858585',
    textInColors: '#FFFFFF',
    textTitles: '#1B1B1B',
    textComplement: '#B2B2B2',

    complementsBoxes: '#FFFFFF',
    complementsDefault: '#E8E8E8',
    complementsInColors: '#1B1B1B',
  },

  boxesBorderRadius: css`
    border-radius: 0.8rem;
  `,
  boxesShadow: css`
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `,

  transition: transitions => {
    const parsedTransitions = transitions.map(
      transition =>
        `${transition.property} ${
          transition.type === 'slow' ? '0.6s' : '0.2s'
        }`,
    );

    return css`
      transition: ${parsedTransitions.join(', ')};
    `;
  },
};
