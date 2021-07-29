import { useState } from "react";
import styled from "styled-components";
import twenty from "../../../assets/20.png";
import Menu from "../Navbar/Menu/Menu";

const StyledCats = styled.div`
  background-color: var(--brandBlack);
  padding: 0 1rem;
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--borderColor);
  @media (min-width: 768px) {
    display: none;
  }
  button {
    border: none;
    color: whitesmoke;
    height: 100%;
    display: flex;
    background: none;
    align-items: center;
    cursor: pointer;
  }
  img {
    max-height: 60%;
    margin-right: 1.5rem;
  }
`;

const Cats = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "home", to: "/" },
    {
      name: "game pass",
      to: "game-pass",
      sublinks: ["overview", "browse games", "Xbox Game Pass for PC"],
    },
    {
      name: "games",
      to: "games",
      sublinks: ["console games", "PC games", "all games"],
    },
    {
      name: "devices",
      to: "devices",
      sublinks: ["consoles", "accessories", "PC devices"],
    },
    { name: "play now", to: "play-now" },
    {
      name: "community",
      to: "community",
      sublinks: ["for everyone", "xbox gear shop", "apps & entertainment"],
    },
    {
      name: "support",
      to: "support",
      sublinks: ["xbox status", "help topics", "new in support"],
    },
    {
      name: "my xbox",
      to: "my-xbox",
      sublinks: ["home", "profile"],
    },
  ];
  return (
    <StyledCats>
      <button onClick={() => setIsOpen(!isOpen)}>
        <img src={twenty} alt="" />
        <ion-icon name="chevron-down-outline"></ion-icon>
      </button>
      <Menu open={isOpen} top="100px" links={links} />
    </StyledCats>
  );
};

export default Cats;
