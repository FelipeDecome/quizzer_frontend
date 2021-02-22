import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;

  color: ${props => props.theme.pallete.textTitles};

  margin-bottom: 1.6rem;

  @media (min-width: 768px) {
    margin-bottom: 3.2rem;
  }
`;

export const Text = styled.p`
  margin-bottom: 4.8rem;

  @media (min-width: 768px) {
    margin-bottom: 6.4rem;
  }
`;
