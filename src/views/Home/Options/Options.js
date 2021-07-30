import styled from "styled-components";

const StyledOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1r;
  padding: 1rem 0;
  max-width: var(--maxWidth);
  @media (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr;
  }
  @media (min-width: 1536px) {
    margin: 0 auto;
  }
  > div {
    padding: 1rem;
    color: white;
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
`;

const Options = () => {
  const options = [
    { name: "game pass", icon: "id-card-outline" },
    { name: "games", icon: "game-controller-outline" },
    { name: "consoles", icon: "logo-xbox" },
    { name: "accessories", icon: "headset-outline" },
    { name: "play", icon: "play-outline" },
    { name: "sign in", icon: "person-outline" },
  ];
  return (
    <StyledOptions>
      {options.map((option, i) => (
        <div>
          <ion-icon name={`${option.icon}`}></ion-icon>
          <span>{option.name}</span>
        </div>
      ))}
    </StyledOptions>
  );
};

export default Options;
