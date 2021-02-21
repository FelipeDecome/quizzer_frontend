import { FlattenSimpleInterpolation } from 'styled-components';
import { TTransitionMixin } from './themes/utils/mixins';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme {
    pallete: {
      background: string;
      backgroundDetail: string;

      main: string;
      mainLight: string;
      mainLighter: string;

      textDefault: string;
      textTitles: string;
      textInColors: string;
      textComplement: string;

      complementsDefault: string;
      complementsInColors: string;
      complementsBoxes: string;
    };
    radius: string;
    boxesBorderRadius: FlattenSimpleInterpolation;
    boxesShadow: FlattenSimpleInterpolation;
    transition: TTransitionMixin;
  }
}
