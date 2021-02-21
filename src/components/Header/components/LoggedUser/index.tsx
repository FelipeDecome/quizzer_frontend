import React, { useCallback, useEffect, useState } from 'react';
import { FiLogOut, FiUser, FiX } from 'react-icons/fi';

import avatarTest from '../../../../assets/images/avatar_test.jpg';
import { useAuth } from '../../../../hooks/auth';

import {
  Container,
  Greetings,
  UserAvatar,
  UserNavigation,
  UserNavigationCloseButton,
  UserNavigationListItem,
} from './styles';

interface ILoggedUser {
  isUserNavigationOpen: boolean;
  handleToggleUserNavigation: (target: string) => void;
}

const LoggedUser: React.FC<ILoggedUser> = ({
  isUserNavigationOpen,
  handleToggleUserNavigation,
}) => {
  const [userNavigationStatus, setUserNavigationStatus] = useState(
    isUserNavigationOpen,
  );

  const { user, signOut } = useAuth();

  const handleClick = useCallback(
    () => handleToggleUserNavigation('userNavigation'),
    [handleToggleUserNavigation],
  );

  useEffect(() => setUserNavigationStatus(isUserNavigationOpen), [
    isUserNavigationOpen,
  ]);

  return (
    <>
      {user && (
        <Container isUserNavigationOpen={userNavigationStatus}>
          <Greetings>
            Bem-vindo,
            <span>{user.name}</span>
          </Greetings>

          <UserAvatar type="button" onClick={handleClick}>
            <img src={avatarTest} alt={user.name} />
          </UserAvatar>

          <UserNavigation>
            <UserNavigationCloseButton>
              <button type="button" onClick={handleClick}>
                <FiX />
              </button>
            </UserNavigationCloseButton>

            <UserNavigationListItem>
              <a href="/">
                <FiUser />
                Ver perfil
              </a>
            </UserNavigationListItem>

            <UserNavigationListItem>
              <a href="/" onClick={signOut}>
                <FiLogOut />
                Sair
              </a>
            </UserNavigationListItem>
          </UserNavigation>
        </Container>
      )}
    </>
  );
};

export default LoggedUser;
