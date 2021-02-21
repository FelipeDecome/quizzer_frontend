import React, { useCallback, useEffect, useState } from 'react';

import { Container } from './styles';

interface IHamburguerIconProps {
  isActive: boolean;
  handleToggleNavigation: (target: string) => void;
}

const HamburguerButton: React.FC<IHamburguerIconProps> = ({
  isActive,
  handleToggleNavigation,
}) => {
  const [state, setState] = useState(isActive);

  const handleClick = useCallback(() => handleToggleNavigation('navigation'), [
    handleToggleNavigation,
  ]);

  useEffect(() => {
    setState(isActive);
  }, [isActive]);

  return (
    <Container onClick={handleClick} isActive={state}>
      <ul>
        <li />
        <li />
        <li />
      </ul>
    </Container>
  );
};

export default HamburguerButton;
