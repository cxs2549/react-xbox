import { useRoutes } from "react-router";
import styled from "styled-components";
import { GlobalStyle } from "./assets/scss/GlobalStyle";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer'
import Home from "./views/Home/Home";

const StyledApp = styled.div`
 
`;

const routes = [
  {path: "/", element: <Home />}
]

const App = () => {
  const element = useRoutes(routes)
  return (
    <div>
      <GlobalStyle />
      <StyledApp>
        <Header />
        <main id="main">
          {element}
        </main>
        <Footer />
      </StyledApp>
    </div>
  );
};

export default App;
