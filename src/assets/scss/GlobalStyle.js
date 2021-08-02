import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scrollbar-width: none; 
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
    --footerText: rgb(205, 205, 205);
    --footerBG: #F2F2F2;
  
    /* utilities */
    --maxWidth: 1600px;
  }

  body {
    scrollbar-width: none;
    background-color: var(--brandBlack);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }

  html {
    height: -webkit-fill-available;
  }

  .modal-open {
    overflow: hidden;
  }

  
  main {
    margin-top: 119px;
    overflow-y: scroll !important;
    scrollbar-width: none;
    @media (min-width: 768px) {
      margin-top: 59px !important;
    }
  }
  

  ion-icon {
      font-size: 1.25rem !important;
      opacity: .85;
      color: inherit !important;
      cursor: pointer;
      transition: color 400ms;
      &:hover { opacity: 1; color: var(--brandGreenLight) !important; }
    }
    h2 {
      font-size: 130%;
    }

    .customBtn {
      background-color: transparent;
      color: inherit;
      border: none;
      font-size: 110%;
      font-weight: bold;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 0.2rem;
      cursor: pointer;
      transition: 200ms transform;
      &:hover {
        transform: scale(1.13);
        color: white;
      }
    }
    
`;
