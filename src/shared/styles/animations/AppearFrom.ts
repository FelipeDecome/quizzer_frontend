import { keyframes } from 'styled-components';

const Up = keyframes`
from {
  opacity: 0;
  transform: translateY(6rem);
}

to {
  opacity: 1;
  transform: translateX(0);
}
`;

const Down = keyframes`
from {
  opacity: 0;
  transform: translateY(-6rem);
}

to {
  opacity: 1;
  transform: translateX(0);
}
`;

const Right = keyframes`
  from {
    opacity: 0;
    transform: translateX(6rem);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
  `;

const Left = keyframes`
from {
  opacity: 0;
  transform: translateX(-6rem);
}

to {
  opacity: 1;
  transform: translateX(0);
}
`;

export { Up, Down, Right, Left };
