import React, { useMemo } from 'react';
import { FiLogIn, FiLogOut, FiUserPlus } from 'react-icons/fi';

import { Container, TButtonType } from './styles';

interface IButtonSmallProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  children,
  colorScheme,
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
      {children}
      {Icon && <Icon />}
    </Container>
  );
};

export default ButtonSmall;
