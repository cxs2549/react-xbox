import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  /* colors */
  :root {
    --brandBlack: #02060D;
    --brandGreen: #107C11;
    --brandGreenLight: #5DC21E;
    --brandGreenDark: #114213;
    --brandYellow: #FFD802;
    --borderColor: #3C3C3C;
    --mutedText: rgba(0, 0, 0, 0.6);
    --footerText: rgb(97, 97, 97);
    --footerBG: #F2F2F2;
  
    /* utilities */
    --maxWidth: 1600px;
  }

  ion-icon {
      font-size: 1.25rem;
      opacity: .85;
      cursor: pointer;
      &:hover { opacity: 1 }
    }
`;
