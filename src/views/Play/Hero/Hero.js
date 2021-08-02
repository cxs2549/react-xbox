import styled from "styled-components";
import gamePass from "../../../assets/gamepass.png";
import gamePassBG from '../../../assets/gamepassBG.jpg'

const StyledHero = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: center;
  padding: 3rem 1rem;
  color: var(--brandGreenLight);
  background-image: linear-gradient(to right, #000000ec 2%, transparent), linear-gradient(to left, black 4%, #ffffff71), url(${gamePassBG});
  background-position: center center;
  img {
    max-width: 240px;
    @media (min-width: 1280px) {
      max-width: 290px;
    }
  }
  h1 {
    font-size: 300%;
    text-transform: uppercase;
    text-align: center;
    line-height: 1;
    margin: 3rem 0;
    text-shadow: 2px 3px 5px #3e3e3e7f;
    @media (min-width: 1536px) {
      font-size: 550%;
    }
    br {
      display: none;
      @media (min-width: 1024px) {
        display: block;
      }
    }
  }
  p {
    color: white;
    text-align: center;
    br {
      display: none;
    }
  }
  #buttons {
    color: white;
    display: flex;
    gap: 1.5rem;
    margin-top: 2rem;
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <img src={gamePass} alt="" />
      <h1>xbox cloud gaming <br /> (beta) on xbox.com</h1>
      <p>Play over 100 high-quality console games on xbox.com with Xbox Game Pass Ultimate <br /> and a compatible controller.</p>
      <div id="buttons">
        <button className='customBtn'><span>sign in</span><ion-icon name="chevron-forward-outline"></ion-icon></button>
        <button className='customBtn'><span>join ultimate</span><ion-icon name="chevron-forward-outline"></ion-icon></button>
      </div>
    </StyledHero>
  );
};

export default Hero;
