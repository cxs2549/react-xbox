import styled from "styled-components";
import hero from "../../../assets/heroes/hero-8.jpeg";

const StyledHero = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 0;
  #heroImg {
    position: relative;
    height: 43vh;
    @media (min-width: 768px) {
      height: 53vh;
    }
    @media (min-width: 1024px) {
      height: 63vh;
    }
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
          to right,
          var(--brandBlack) 1%,
          transparent
        ),
        linear-gradient(to top, black 2%, transparent 50%);
    }
    img {
      max-width: 100%;
      min-height: 100%;
      object-fit: cover;
    }
  }
  #textWrapper {
    height: 100%;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: absolute;
    top: 1.5rem;
    z-index: 3;
   
    @media (min-width: 1600px) {
      top: 5rem;
      left: 50%;
      transform: translateX(-50%);
    }
    #text {
      position: absolute;
      padding: 1rem;
      @media (min-width: 768px) {
        padding: 1.5rem;
      }
      @media (min-width: 1600px) {
        padding: 0;
      }
      bottom: 0;
      left: 0;
      height: 100%;
      color: white;
      z-index: 2;
      h1,
      p {
        opacity: 0.9;
      }
      h1 {
        line-height: 1;
        margin-bottom: 1rem;
        transition: font-size 400ms;
        @media (min-width: 1024px) {
          font-size: 280%;
        }
        @media (min-width: 1536px) {
          font-size: 290%;
        }
      }
      p {
        margin-bottom: 1.5rem;
        font-weight: bold;
      }
      button {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        border: none;

        white-space: nowrap;
        font-weight: 900;
        font-size: 1rem;
        border-radius: 4px;
        color: #2b2828f6;
        cursor: pointer;
        letter-spacing: 0.12em;

        transition: 500ms filter;
        &:hover {
          filter: brightness(1.2);
        }
      }
      .btn {
        opacity: 0.85;
        box-sizing: border-box;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: transparent;
        border: 2px solid #e74c3c;
        border-radius: 0.6em;
        color: #e74c3c;
        cursor: pointer;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-self: center;
        -ms-flex-item-align: center;
        align-self: center;
        font-size: 1rem;
        line-height: 1;
        padding: 1em 2em;
        text-decoration: none;
        text-align: center;
        text-transform: uppercase;
        font-family: "Montserrat", sans-serif;
        font-weight: 900;
        position: relative;
        /* height: 60px */
        width: 160px;
        height: 44px;
        span {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        ion-icon {
          position: absolute;
        }
      }
      .btn:hover,
      .btn:focus {
        color: #fff;
        outline: 0;
        opacity: 1;
      }
      .third {
        border-color: var(--brandGreenLight);
        color: #fff;
        box-shadow: 0 0 40px 40px var(--brandGreenLight) inset, 0 0 0 0 #3498db;
        -webkit-transition: all 150ms ease-in-out;
        transition: all 150ms ease-in-out;
      }
      .third:hover {
        box-shadow: 0 0 10px 0 var(--brandGreenLight) inset,
          0 0 10px 4px var(--brandGreenLight);
      }
    }
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <div id="heroImg">
        <img src={hero} alt="" />
        <div id="textWrapper">
          <div id="text">
            <h1>
              {" "}
              Battlefield™ <br /> 2042
            </h1>
            <p>For Xbox Series X|S & Xbox One</p>
            <button className="btn third">
              <span>GET IT NOW</span>
            </button>
          </div>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
