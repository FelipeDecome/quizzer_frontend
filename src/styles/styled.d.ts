import { FlattenSimpleInterpolation } from 'styled-components';

type TTransitionType = 'default' | 'slow';

interface ITransitionObject {
  property: string;
  type?: TTransitionType;
}

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
    boxesBorderRadius: FlattenSimpleInterpolation;
    boxesShadow: FlattenSimpleInterpolation;
    transition: (
      transitions: ITransitionObject[],
    ) => FlattenSimpleInterpolation;
  }
}
