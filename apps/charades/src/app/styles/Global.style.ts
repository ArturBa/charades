import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    color ${(props) => props.theme.colors.black};
  }

  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }
`;

export default GlobalStyles;
