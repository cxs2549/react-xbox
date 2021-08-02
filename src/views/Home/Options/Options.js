import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledOptions = styled.div`
  padding: 1rem 0;
  max-width: var(--maxWidth);
  background-color: var(--brandBlack);
  @media (min-width: 1536px) {
  }
  #inner {
    max-width: 1200px;
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1r;
    @media (min-width: 768px) {
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: 1fr;
    }

    a {
      padding: 1rem;
      color: #fffffff1;
      text-decoration: none;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      gap: 0.75rem;
      font-weight: bold;
      font-size: 0.9rem;
      transition: 200ms all;
      cursor:pointer;
      @media (min-width: 1280px) {
        font-size: 1rem;
      }
        &:hover {
        transform: scale(1.13);
        color: var(--brandGreenLight);
      }
      ion-icon {
        font-size: 2rem !important;
      }
  
    }
  }
`;

const Options = () => {
  const options = [
    { name: "game pass", icon: "id-card-outline", to: "/in-dev" },
    { name: "games", icon: "game-controller-outline", to: "/in-dev" },
    { name: "consoles", icon: "logo-xbox", to: "/in-dev" },
    { name: "accessories", icon: "headset-outline", to: "/in-dev" },
    { name: "play", icon: "play-outline", to: "play" },
    { name: "sign in", icon: "person-outline", to: "account" },
  ];
  return (
    <StyledOptions>
      <div id="inner">
        {options.map((option, i) => (
          <div key={i}>
            <NavLink to={option.to}>
              <ion-icon name={`${option.icon}`}></ion-icon>
              <span>{option.name}</span>
            </NavLink>
          </div>
        ))}
      </div>
    </StyledOptions>
  );
};

export default Options;
