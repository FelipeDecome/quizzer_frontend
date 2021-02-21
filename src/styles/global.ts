import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  ${props => {
    const { pallete } = props.theme;

    return css`
      :root {
        font-size: 60%;
      }

      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: 0;
        list-style: none;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      body,
      #root {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100vh;
        max-width: 100vw;
      }

      body {
        font-size: 1.4rem;

        background: ${pallete.background};
        color: ${pallete.textDefault};
      }

      body,
      button,
      input {
        font-family: 'Noto Sans TC', sans-serif;
      }

      button {
        border: 0;
        background: transparent;

        cursor: pointer;
      }

      #root {
        position: relative;
        overflow-x: hidden;
      }

      @media (min-width: 768px) {
        :root {
          font-size: 62.5%;
        }

        body {
          font-size: 1.6rem;
        }
      }
    `;
  }}



`;
