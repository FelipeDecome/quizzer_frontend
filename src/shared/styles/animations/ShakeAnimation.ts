import { keyframes } from 'styled-components';

const ShakeAnimation = keyframes`
  33% {
    transform: translateX(-0.6rem);
  }

  66% {
    transform: translateX(1rem);
  }

  100% {
    transform: translateX(0);
  }
  `;

export { ShakeAnimation };
