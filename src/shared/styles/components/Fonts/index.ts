import styled, { css } from 'styled-components';
import { styleAbove } from '../../mixins/breakpoints';

const BaseFont = css`
  font-family: 'Noto Sans TC', sans-serif;
`;

interface IFontMixinProps {
  size?: string;
  height?: string;
  weight?: string;
  spacing?: string;
}

const fontMixin = ({ size, height, weight, spacing }: IFontMixinProps) => css`
  ${size && `font-size: ${size}`};
  ${height && `line-height: ${height}`};
  ${weight && `font-weight: ${weight}`};
  ${spacing && `letter-spacing: ${spacing}`};
`;

const Header = styled.h1`
  color: ${props => props.theme.colors.text.titlesDarker};

  ${BaseFont};
  ${fontMixin({ size: '3.6rem', height: '4.8rem', weight: '700' })}

  ${styleAbove('SM')} {
    ${fontMixin({ size: '4.8rem', height: '5.4rem' })}
  }
`;

const Paragraph = styled.p`
  color: ${props => props.theme.colors.text.default};

  ${BaseFont};
  ${fontMixin({
    size: '1.4rem',
    height: '2.4rem',
    weight: '400',
    spacing: '0.04em',
  })};

  ${styleAbove('SM')} {
    ${fontMixin({
      size: '1.6rem',
      height: '2.8rem',
      spacing: '0.02em',
    })};
  }
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.text.titles};

  ${BaseFont};
  ${fontMixin({ size: '2.8rem', height: '3.2rem', weight: '500' })}

  ${styleAbove('SM')} {
    ${fontMixin({ size: '3.6rem', height: '4rem' })}
  }
`;

const SubTitle = styled.h2`
  color: ${props => props.theme.colors.text.titles};

  ${BaseFont};
  ${fontMixin({ size: '2rem', height: '2.8rem', weight: '500' })}

  ${styleAbove('SM')} {
    ${fontMixin({ size: '2.4rem', height: '3rem' })}
  }
`;

const Complement = styled.span`
  color: ${props => props.theme.colors.text.complement};
  text-rendering: optimizeLegibility;

  ${BaseFont};
  ${fontMixin({
    size: '1.2rem',
    height: '1.6rem',
    weight: '100',
    spacing: '0.06em',
  })};

  ${styleAbove('SM')} {
    ${fontMixin({
      size: '1.4rem',
      height: '2rem',
      spacing: '0.04em',
    })};
  }
`;

const Span = styled.span`
  color: ${props => props.theme.colors.text.complement};
  text-rendering: optimizeLegibility;

  ${BaseFont};
  ${fontMixin({
    size: '1rem',
    height: '1.6rem',
    weight: '100',
    spacing: '0.06rem',
  })};

  ${styleAbove('SM')} {
    ${fontMixin({
      size: '1.2rem',
      height: '2rem',
      spacing: '0.04rem',
    })};
  }
`;

export { Header, Paragraph, Title, SubTitle, Complement, Span };
