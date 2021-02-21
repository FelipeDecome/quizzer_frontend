import React from 'react';
import ButtonSmall from '../../components/ButtonSmall';
import PageDefault from '../../components/PageDefault';

import { Container, Content } from './styles';

import illustrationSVG from '../../assets/images/illustration.svg';

const Landing: React.FC = () => {
  return (
    <Container>
      <PageDefault>
        <Content>
          <div>
            <h1>Olá mundo!</h1>

            <p>
              O que temos que ter sempre em mente é que a contínua expansão de
              nossa atividade faz parte de um processo de gerenciamento das
              condições inegavelmente apropriadas.
            </p>

            <ButtonSmall colorScheme="main">Lorem ipsum dolor</ButtonSmall>
          </div>

          <div>
            <img src={illustrationSVG} alt="landing illustration" />
          </div>
        </Content>
      </PageDefault>
    </Container>
  );
};

export default Landing;
