import { DefaultTheme } from 'styled-components';
import defaultValues from './utils/defaultValues';
import mixins from './utils/mixins';

export const light: DefaultTheme = {
  pallete: {
    background: '#F3F3F3',
    backgroundDetail: '#F9F9F9',

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
