import React from 'react';
import ButtonSmall from '../../components/ButtonSmall';
import PageDefault from '../../components/PageDefault';

import { Title, Text } from './styles';

import illustrationSVG from '../../assets/images/illustration.svg';
import ContentWrapper from '../../components/ContentWrapper';

const Landing: React.FC = () => {
  return (
    <PageDefault>
      <ContentWrapper
        complement={<img src={illustrationSVG} alt="landing illustration" />}
      >
        <Title>Crie quizzes e desafie seus amigos</Title>

        <Text>
          O que temos que ter sempre em mente é que a contínua expansão de nossa
          atividade faz parte de um processo de gerenciamento das condições
          inegavelmente apropriadas.
        </Text>

        <ButtonSmall colorScheme="main">Lorem ipsum dolor</ButtonSmall>

        <div />
      </ContentWrapper>
    </PageDefault>
  );
};

export default Landing;
