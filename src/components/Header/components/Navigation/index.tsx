import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../../hooks/auth';
import ButtonSmall from '../../../ButtonSmall';

import {
  Container,
  ButtonsContainer,
  MenuListItem,
  MenuList,
  MenuListItemSeparator,
} from './styles';

interface INavigationProps {
  isCollapsed: boolean;
}

const Navigation: React.FC<INavigationProps> = ({ isCollapsed }) => {
  const [navigationCollapsed, setNavigationCollapsed] = useState(isCollapsed);

  const { user, signIn } = useAuth();

  useEffect(() => {
    setNavigationCollapsed(isCollapsed);
  }, [isCollapsed]);

  return (
    <Container userLogged={!!user} isCollapsed={navigationCollapsed}>
      <MenuList>
        {user && (
          <>
            <MenuListItem>
              <a href="/">Criar um quiz</a>
            </MenuListItem>

            <MenuListItemSeparator />
          </>
        )}

        <MenuListItem>
          <a href="/">Encontrar quizzes</a>
        </MenuListItem>
      </MenuList>

      {!user && (
        <ButtonsContainer>
          <ButtonSmall icon="signin" iconLeft onClick={signIn}>
            Entrar
          </ButtonSmall>

          <ButtonSmall colorScheme="main" icon="signup" iconLeft>
            Criar conta
          </ButtonSmall>
        </ButtonsContainer>
      )}
    </Container>
  );
};

export default Navigation;
