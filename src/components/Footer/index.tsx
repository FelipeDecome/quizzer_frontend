import React from 'react';
import { FaGithub } from 'react-icons/fa';

import { Container, Credits } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <FaGithub />
      <Credits>
        Desenvolvido por
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <a
          href="https://github.com/felipedecome"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;Felipe Decome
        </a>
        .
      </Credits>
    </Container>
  );
};

export default Footer;
