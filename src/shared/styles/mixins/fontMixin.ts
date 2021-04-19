import { css, FlattenSimpleInterpolation } from 'styled-components';

interface IFontMixinProps {
  size?: string;
  height?: string;
  weight?: string;
  spacing?: string;
}

const fontMixin = ({
  size,
  height,
  weight,
  spacing,
}: IFontMixinProps): FlattenSimpleInterpolation => css`
  ${size && `font-size: ${size}`};
  ${height && `line-height: ${height}`};
  ${weight && `font-weight: ${weight}`};
  ${spacing && `letter-spacing: ${spacing}`};
`;

export { fontMixin };
