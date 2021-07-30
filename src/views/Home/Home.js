import styled from 'styled-components'
import Cards from "./Cards/Cards"
import Hero from "./Hero/Hero"
import Options from "./Options/Options"

const StyledHome = styled.div`
background-color: var(--brandBlack);
  max-width: var(--maxWidth);
  margin: 0 auto;
`

const Home = () => {
  return (
    <StyledHome>
      <Hero />
      <Options />
      <Cards />
    </StyledHome>
  )
}

export default Home
