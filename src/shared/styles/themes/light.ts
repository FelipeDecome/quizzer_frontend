import { DefaultTheme } from 'styled-components';
import { pallete } from './pallete';

export const light: DefaultTheme = {
  colors: {
    background: pallete.bluishWhite,
    boxes: pallete.white,

    error: {
      default: pallete.red,
      light: pallete.redLight,
    },

    success: {
      default: pallete.green,
      light: pallete.greenLight,
    },

    text: {
      default: pallete.gray,
      titles: pallete.grayDark,
      titlesDarker: pallete.Black,
      inColors: pallete.bluishWhite,
      complement: pallete.grayLight,
    },

    main: {
      default: pallete.purple,
      light: pallete.purpleLight,
      lighter: pallete.purpleLighter,
    },

    complement: {
      default: pallete.grayLighter,
      inColors: pallete.bluishWhite,
    },
  },
};
