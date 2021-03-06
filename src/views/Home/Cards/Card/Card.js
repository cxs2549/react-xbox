import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
  color: ${(props) => props.text || "white"};
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  #text {
    position: ${(props) => (props.float ? "absolute" : "relative")};
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: transparent;
    background-image: linear-gradient(
      to right,
      ${(props) => props.color || "transparent"},
      transparent
    );
    z-index: 2;
    padding: 1.5rem 1rem;
    h1 {
      text-transform: capitalize;
    }
    h1,
    h2 {
      margin-bottom: 2rem;
      opacity: 0.9;
    }
    h2 {
      @media (min-width: 640px) {
        min-height: 60px;
      }
    }
    
  }
  button a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    ion-icon {
      margin-top: 2px;
      margin-left: 0.4em;
    }
  }
`;

const Card = ({ title, subtitle, image, button, float, color, text }) => {
  return (
    <StyledCard image={image} float={float} color={color} text={text}>
      <img src={image} alt="" />
      <div id="text">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <button className="customBtn">
          <Link to="/in-dev">
            <span>{button}</span>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </Link>
        </button>
      </div>
    </StyledCard>
  );
};

export default Card;
