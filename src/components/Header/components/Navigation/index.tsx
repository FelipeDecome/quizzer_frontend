import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
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

  const { user } = useAuth();
  const history = useHistory();

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
          <ButtonSmall
            icon="signin"
            iconLeft
            onClick={() => history.push('/entrar')}
          >
            Entrar
          </ButtonSmall>

          <ButtonSmall
            colorScheme="main"
            icon="signup"
            iconLeft
            onClick={() => history.push('/registro')}
          >
            Criar conta
          </ButtonSmall>
        </ButtonsContainer>
      )}
    </Container>
  );
};

export default Navigation;
