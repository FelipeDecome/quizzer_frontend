import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${props => {
    const { pallete, boxesShadow, radius } = props.theme;

    return css`
      width: 100vw;
      height: 100vh;

      display: flex;
      justify-content: center;
      align-items: center;

      form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        width: 34rem;
        height: 48rem;
        background: ${pallete.complementsBoxes};
        border-radius: ${radius};
        ${boxesShadow};

        > h1 {
          font-size: 4.8rem;
          color: ${pallete.textComplement};
        }

        > div {
          display: flex;
          flex-direction: column;

          margin-top: 4.8rem;

          a {
            margin-top: 1.2rem;

            font-size: 1.2rem;
            text-align: center;

            color: ${pallete.textComplement};

            &:first-of-type {
              margin-top: 0.8rem;
              text-align: right;
            }

            span {
              color: ${pallete.mainLight};
            }

            &:hover {
              color: ${pallete.textDefault};

              span {
                color: ${pallete.main};
              }
            }
          }

          button {
            gap: 1.2rem;
            margin-top: 3.2rem;

            height: 4.4rem;
            font-size: 1.8rem;

            svg {
              font-size: 2rem;
            }
          }
        }
      }

      @media (min-width: 768px) {
        form {
          width: 56rem;
          height: 62rem;

          > h1 {
            font-size: 6.4rem;
          }

          > div {
            margin-top: 6.4rem;

            a {
              margin-top: 1.6rem;
              font-size: 1.4rem;
            }

            button {
              height: 5.5rem;
              &,
              svg {
                font-size: 2.4rem;
              }
            }
          }
        }
      }

      @media (min-width: 1120px) {
        form {
          width: 68rem;
        }
      }
    `;
  }};
`;
