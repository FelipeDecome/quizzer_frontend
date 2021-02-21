import React, { MouseEvent, useCallback, useEffect, useState } from 'react';

import logoSVG from '../../assets/images/logo.svg';
import brandSVG from '../../assets/images/brand.svg';

import { Container, HeaderLeft, HeaderRight } from './styles';

import GoBackButton from './components/GoBackButton';
import HamburguerButton from './components/HamburguerIcon';
import Navigation from './components/Navigation';
import LoggedUser from './components/LoggedUser';

interface INavigationHandlers {
  [key: string]: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC = () => {
  const [hamburguerButtonActive, setHamburguerButtonActive] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [userNavigationOpen, setUserNavigationOpen] = useState(false);

  const toggleNavigationsState = useCallback(
    (target: keyof INavigationHandlers) => {
      const navigationHandlers: INavigationHandlers = {
        navigation: setNavigationOpen,
        userNavigation: setUserNavigationOpen,
      };

      /* Set all non selected navigations to close */
      Object.entries(navigationHandlers)
        .filter(([key]) => key !== target)
        .map(([, setState]) => setState(false));

      return navigationHandlers[target](state => !state);
    },
    [],
  );

  const handleNavigationBlur = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();

      const { nodeName } = e.target as HTMLElement;

      if (nodeName === 'HEADER' && navigationOpen) {
        setNavigationOpen(false);
      }
    },
    [navigationOpen],
  );

  useEffect(() => {
    setHamburguerButtonActive(navigationOpen);
  }, [navigationOpen]);

  return (
    <Container navigationState={navigationOpen} onClick={handleNavigationBlur}>
      <div>
        <HeaderLeft>
          <img id="logo" src={logoSVG} alt="Quizzes platform logo" />

          <img id="brand" src={brandSVG} alt="Quizzes platform brand name" />

          <GoBackButton />
        </HeaderLeft>

        <HeaderRight>
          <Navigation isCollapsed={navigationOpen} />

          <LoggedUser
            isUserNavigationOpen={userNavigationOpen}
            handleToggleUserNavigation={toggleNavigationsState}
          />

          <HamburguerButton
            isActive={hamburguerButtonActive}
            handleToggleNavigation={toggleNavigationsState}
          />
        </HeaderRight>
      </div>
    </Container>
  );
};

export default Header;
