import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
    list-style: none;

    transition: color 0.2s ease-out, background 0.2s ease-out;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body,
  #root {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text.default};
  }

  body,
  button,
  input {
    font-family: 'Noto Sans TC', sans-serif;
  }

  #root {
    position: relative;
  }

  @media (min-width: 768px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
