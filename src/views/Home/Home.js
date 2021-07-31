import styled from "styled-components";
import Cards from "./Cards/Cards";
import Hero from "./Hero/Hero";
import Options from "./Options/Options";
import homeBG from '../../assets/home.jpg'

const StyledHome = styled.div`
  background-color: var(--brandBlack);
  background-color: #55efc4;
  background-image: linear-gradient(315deg, #24685575 0%, #000000 74%), url(${homeBG});
background-position: center center;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

const Home = () => {
  return (
    <StyledHome>
      <Hero />
      <Options />
      <Cards />
    </StyledHome>
  );
};

export default Home;
