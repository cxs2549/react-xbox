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

  body {
    scrollbar-width: none;
    /* overflow: hidden; */
    background-color: var(--brandBlack);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .modal-open {
    overflow: hidden;
  }

  
  main {
    margin-top: 99px;
    overflow-y: scroll !important;
    scrollbar-width: none;
    @media (min-width: 768px) {
      margin-top: 59px;
    }
  }
  

  ion-icon {
      font-size: 1.25rem !important;
      opacity: .85;
      cursor: pointer;
      transition: color 400ms;
      &:hover { opacity: 1; color: var(--brandGreenLight) }
    }
    h2 {
      font-size: 130%;
    }
    
`;
