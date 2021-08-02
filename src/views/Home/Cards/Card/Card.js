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
    background-color: #9a9a9a21;
    background-image: linear-gradient(
      to right,
      ${(props) => props.color || "black"},
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
`;

const Card = ({ title, subtitle, image, button, float, color, text }) => {
  return (
    <StyledCard image={image} float={float} color={color} text={text}>
      <img src={image} alt="" />
      <div id="text">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <button className="customBtn">
          <span>{button}</span>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
    </StyledCard>
  );
};

export default Card;
