import React, { useCallback, useState } from 'react';
import { FiArrowLeft, FiLogOut, FiUser, FiX } from 'react-icons/fi';

import logoSVG from '../../assets/images/logo.svg';
import brandSVG from '../../assets/images/brand.svg';
import avatarTest from '../../assets/images/avatar_test.jpg';

import {
  TNavState,
  Container,
  HeaderLeft,
  HeaderRight,
  Navigation,
  LoggedUser,
  UserNavigation,
  HamburguerIcon,
} from './styles';
import ButtonSmall from '../ButtonSmall';

interface INavigationHandlers {
  [key: string]: React.Dispatch<React.SetStateAction<TNavState>>;
}

const Header: React.FC = () => {
  const [navigationState, setNavigationState] = useState<TNavState>('closed');
  const [userNavigationState, setUserNavigationState] = useState<TNavState>(
    'closed',
  );

  const [user, setUser] = useState(false);

  const handleNavigationsState = useCallback(
    (target: keyof INavigationHandlers, state: TNavState) => {
      const navigationHandlers: INavigationHandlers = {
        navigation: setNavigationState,
        userNavigation: setUserNavigationState,
      };

      /* Set all non selected navigations to close */
      Object.entries(navigationHandlers)
        .filter(([key]) => key !== target)
        .map(([, setState]) => setState('closed'));

      const newState = state === 'closed' ? 'open' : 'closed';

      return navigationHandlers[target](newState);
    },
    [],
  );

  return (
    <Container>
      <div>
        <HeaderLeft>
          <img id="logo" src={logoSVG} alt="Quizzes platform logo" />

          <img id="brand" src={brandSVG} alt="Quizzes platform brand name" />

          <a href="/">
            <FiArrowLeft />
            Voltar
          </a>
        </HeaderLeft>

        <HeaderRight>
          <Navigation state={navigationState} userLogged={!!user}>
            <ul>
              {user && (
                <>
                  <li>
                    <a href="/">Criar um quiz</a>
                  </li>
                  <span />
                </>
              )}
              <li>
                <a href="/">Encontrar quizzes</a>
              </li>
            </ul>

            {!user && (
              <div>
                <ButtonSmall
                  text="Entrar"
                  icon="signin"
                  iconLeft
                  onClick={e => {
                    e.preventDefault();
                    setUser(true);
                  }}
                />
                <ButtonSmall
                  text="Criar conta"
                  colorScheme="main"
                  icon="signup"
                  iconLeft
                />
              </div>
            )}
          </Navigation>

          {user && (
            <LoggedUser
              type="button"
              userNavigationState={userNavigationState}
              onClick={() => {
                return handleNavigationsState(
                  'userNavigation',
                  userNavigationState,
                );
              }}
            >
              <p>
                Bem-vindo,
                <a href="/">Felipe Decome</a>
              </p>

              <div>
                <img src={avatarTest} alt="Felipe Decome" />

                <UserNavigation state={userNavigationState}>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        return handleNavigationsState(
                          'userNavigation',
                          userNavigationState,
                        );
                      }}
                    >
                      <FiX />
                    </button>
                  </li>
                  <li>
                    <a href="/">
                      <FiUser />
                      Ver perfil
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      onClick={e => {
                        e.preventDefault();
                        setUser(false);
                      }}
                    >
                      <FiLogOut />
                      Sair
                    </a>
                  </li>
                </UserNavigation>
              </div>
            </LoggedUser>
          )}

          <HamburguerIcon
            onClick={() => {
              return handleNavigationsState('navigation', navigationState);
            }}
            state={navigationState}
          >
            <ul>
              <li />
              <li />
              <li />
            </ul>
          </HamburguerIcon>
        </HeaderRight>
      </div>
    </Container>
  );
};

export default Header;
