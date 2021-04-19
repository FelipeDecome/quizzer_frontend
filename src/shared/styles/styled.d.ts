import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme {
    colors: {
      background: string;
      boxes: string;

      error: {
        default: string;
        light: string;
      };

      success: {
        default: string;
        light: string;
      };

      text: {
        default: string;
        titles: string;
        titlesDarker: string;
        inColors: string;
        complement: string;
      };

      main: {
        default: string;
        light: string;
        lighter: string;
      };

      complement: {
        default: string;
        inColors: string;
      };
    };
  }
}
