import styled from "styled-components";
import hero from "../../../assets/heroes/hero-8.jpeg";

const StyledHero = styled.div`
  #heroImg {
    height: 69vh;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to right,
        var(--brandBlack),
        transparent
      );
    }
    img {
      max-width: 100%;
      min-height: 100%;
      object-fit: cover;
    }
    #text {
      position: absolute;
      padding: 1rem;
      bottom: 0;
      left: 0;
      height:70%;
      color: white;
      z-index: 2;
      h1 {
        line-height: 1;
        margin-bottom: 1.25rem;
      }
      p {
        margin-bottom: 1.5rem;
        font-weight: bold;
      }
      button {
        display: flex;
        align-items: center;
        gap: .5rem;
        background-color: var(--brandGreenLight);
        border: none;
        padding: 0.5rem 1.75rem;
        font-weight: bolder;
        font-size: 1.02rem;
        border-radius: 4px;
        color: #2b2828f6;
        cursor: pointer;
      }
    }
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <div id="heroImg">
        <img src={hero} alt="" />
        <div id="text">
          <h1> Call of Duty®: <br /> Modern Warfare®</h1>
          <p>For Xbox Series X|S & Xbox One</p>
          <button><span>GET IT NOW</span><ion-icon name="chevron-forward-outline"></ion-icon></button>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
