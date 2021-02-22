import styled, { css } from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Complement = styled.div``;

export const Container = styled.div`
  ${props => {
    const { pallete, radius, boxesShadow } = props.theme;

    return css`
      width: 80%;
      height: 48rem;
      padding: 0 15%;

      display: flex;
      align-items: center;

      background: ${pallete.complementsBoxes};
      border-radius: ${radius};
      ${boxesShadow};

      overflow: hidden;

      ${Complement} {
        display: none;
      }

      @media (min-width: 768px) {
        width: 56rem;
        height: 68rem;
        padding: 0 11rem;
      }

      @media (min-width: 1120px) {
        width: 90%;
        max-width: 112rem;
        padding: 0 6.4rem;
        gap: 20rem;

        ${Complement} {
          display: initial;
        }
      }
    `;
  }}
`;
