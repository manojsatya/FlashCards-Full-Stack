import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #eee;
  /* text-align: center */
}
`;

export default GlobalStyle;
