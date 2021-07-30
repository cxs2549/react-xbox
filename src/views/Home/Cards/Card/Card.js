import styled from "styled-components";


const StyledCard = styled.div`
  height: 500px;
  display: flex;
  flex-flow: column;
  position: relative;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  #text {
    position: ${props => (props.float ? 'absolute' : 'relative')};
    bottom: 0;
    left: 0;
    width: 100%;
    background-image: linear-gradient(to right, ${props => props.color || 'black'}, transparent);

    padding: 1.5rem 1rem;
    h1 {text-transform: capitalize;}
    h1,
    h2 {
      margin-bottom: 2rem;
    }
    h2 {
      @media (min-width: 640px) {

        min-height: 60px;
      }
    }
    button {
      background-color: transparent;
      color: white;
      border: none;
      font-size: 110%;
      font-weight: bold;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: .2rem;
      cursor: pointer;
      transition: 200ms transform;
      &:hover {
        transform: scale(1.13);
      }
    }
  }
`;

const Card = ({title, subtitle, image, button, float, color}) => {
  return (
    <StyledCard image={image} float={float} color={color}>
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
