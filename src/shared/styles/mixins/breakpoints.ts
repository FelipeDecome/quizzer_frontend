const breakpoints = {
  XS: 360,
  SM: 768,
  MD: 992,
  LG: 1200,
};

type TBreakpoint = keyof typeof breakpoints;

const styleBelow = (breakpoint: TBreakpoint): string => `
  @media (max-width: ${breakpoints[breakpoint] - 1}px)
`;

const styleAbove = (breakpoint: TBreakpoint): string => `
  @media (min-width: ${breakpoints[breakpoint]}px)
`;

const styleBeetween = (downTo: TBreakpoint, upTo: TBreakpoint): string => `
  @media (min-width: ${breakpoints[downTo]}px) and (max-width: ${
  breakpoints[upTo] - 1
}px)
`;

export { styleBelow, styleAbove, styleBeetween };
