import { css, FlattenSimpleInterpolation } from 'styled-components';

type TTransitionType = 'default' | 'slow';

interface ITransitionObject {
  property: string;
  type?: TTransitionType;
}

export type TTransitionMixin = (
  transitions: ITransitionObject[],
) => FlattenSimpleInterpolation;

interface IMixins {
  transition: TTransitionMixin;
}

export default {
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
} as IMixins;
