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
    button {
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
  }
`;

const Card = ({ title, subtitle, image, button, float, color, text }) => {
  return (
    <StyledCard image={image} float={float} color={color} text={text}>
      <img src={image} alt="" />
      <div id="text">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <button>
          <span>{button}</span>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
    </StyledCard>
  );
};

export default Card;
