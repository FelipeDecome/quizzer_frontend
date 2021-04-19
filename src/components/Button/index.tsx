import React, { useEffect, useState } from 'react';
import { FiLoader } from 'react-icons/fi';
import { IconBaseProps } from 'react-icons/lib';
import {
  Container,
  Text,
  StyledIcon,
  StyledLoadingIcon,
  AnimationContainer,
} from './styles';

interface IButtonProps {
  onClick?: () => void;
  fixedWidth?: boolean;
  isLoading?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
}

const Button: React.FC<IButtonProps> = ({
  onClick,
  fixedWidth,
  isLoading,
  icon: Icon,
  children,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => setLoading(!!isLoading), [isLoading]);

  return (
    <Container onClick={onClick} fixedWidth={fixedWidth} isLoading={loading}>
      {!loading && (
        <AnimationContainer>
          {Icon && <StyledIcon as={Icon} />}

          <Text as="span">{children}</Text>
        </AnimationContainer>
      )}
      {loading && (
        <AnimationContainer>
          <StyledLoadingIcon as={FiLoader} />
        </AnimationContainer>
      )}
    </Container>
  );
};

export default Button;
