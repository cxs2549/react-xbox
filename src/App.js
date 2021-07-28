import styled from "styled-components";
import { GlobalStyle } from "./assets/scss/GlobalStyle";

const StyledApp = styled.div`
  color: $reactBlue;
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <StyledApp>freshness</StyledApp>
    </div>
  );
};

export default App;
