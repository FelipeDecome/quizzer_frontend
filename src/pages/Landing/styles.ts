import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  ${props => {
    const { pallete, radius, boxesShadow } = props.theme;

    return css`
      display: flex;

      width: 34rem;
      height: 48rem;
      padding: 0 3rem;

      background: ${pallete.complementsBoxes};
      border-radius: ${radius};
      ${boxesShadow};

      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
          align-self: flex-start;

          font-size: 2.8rem;
          letter-spacing: 0.4rem;

          color: ${pallete.textTitles};
        }

        p {
          margin-top: 3.2rem;
          font-size: 1.4rem;
        }

        button {
          margin-top: 4.8rem;

          height: 5.4rem;

          font-size: 1.6rem;
        }
      }

      img {
        display: none;
      }

      @media (min-width: 768px) {
        position: relative;
        width: 56rem;
        height: 68rem;

        padding: 0 9rem;
        overflow: hidden;

        > div {
          &:first-child {
            justify-content: flex-start;
            z-index: 1;
          }

          h1 {
            margin-top: 12rem;
            font-size: 3.8rem;
          }

          p {
            margin-top: 4.8rem;
            font-size: 1.6rem;
          }

          button {
            margin-top: 6.4rem;
            font-size: 1.8rem;
          }
        }

        img {
          display: initial;
          position: absolute;

          bottom: 4rem;
          right: -18rem;

          width: 36rem;
        }
      }

      @media (min-width: 1120px) {
        width: 1120px;
        justify-content: space-between;

        padding: 0 7.2rem;

        div {
          flex: 1;
          max-width: 40rem;

          &:first-child {
            justify-content: center;
          }

          h1 {
            margin-top: 0;
          }

          img {
            position: initial;
            right: 0;
            bottom: 0;

            width: 100%;
          }
        }
      }
    `;
  }};
`;
