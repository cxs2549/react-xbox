import styled from "styled-components";
import { GlobalStyle } from "./assets/scss/GlobalStyle";
import Header from "./components/Header/Header";

const StyledApp = styled.div`
  color: $reactBlue;
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <StyledApp>
        <Header />
      </StyledApp>
    </div>
  );
};

export default App;
