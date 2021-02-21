import { DefaultTheme } from 'styled-components';
import defaultValues from './utils/defaultValues';
import mixins from './utils/mixins';

export const dark: DefaultTheme = {
  pallete: {
    background: '#1B1B1B',
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
  ...defaultValues,
  ...mixins,
};
