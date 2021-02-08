import React, { useMemo } from 'react';
import { FiLogIn, FiLogOut, FiUserPlus } from 'react-icons/fi';

import { Container, TButtonType } from './styles';

interface IButtonSmallProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  colorScheme?: TButtonType;
  icon?: keyof typeof icons;
  iconLeft?: boolean;
}

const icons = {
  signin: FiLogIn,
  signup: FiUserPlus,
  signout: FiLogOut,
};

const ButtonSmall: React.FC<IButtonSmallProps> = ({
  colorScheme,
  text,
  icon,
  iconLeft,
  ...rest
}) => {
  const Icon = useMemo(() => {
    if (icon) return icons[icon];

    return undefined;
  }, [icon]);

  return (
    <Container
      colorScheme={colorScheme || 'default'}
      iconLeft={iconLeft}
      {...rest}
    >
      {text}
      {Icon && <Icon />}
    </Container>
  );
};

export default ButtonSmall;
