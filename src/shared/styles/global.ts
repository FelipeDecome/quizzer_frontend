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

    /* transition: color 0.2s, background 0.2s; */
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body,
  #root {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background: ${props => props.theme.colors.background};
  }

  body,
  button,
  input {
    font-family: 'Noto Sans TC', sans-serif;
  }

  input::placeholder {
    color: ${props => props.theme.colors.text.complement};
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
