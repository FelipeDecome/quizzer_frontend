import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  ${props => {
    const { pallete } = props.theme;

    return css`
      :root {
        font-size: 62.5%;
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
        height: 100vh;
        max-width: 100vw;
      }

      body {
        font-family: 'Noto Sans TC', sans-serif;
        font-size: 1.6rem;

        background: ${pallete.background};
        color: ${pallete.textDefault};
      }

      button {
        border: 0;
        background: transparent;

        font-family: 'Noto Sans TC', sans-serif;
        font-weight: 700;
      }

      #root {
        position: relative;
        overflow: hidden;
      }

      @media (max-width: 768px) {
        font-size: 60%;
      }
    `;
  }}



`;
