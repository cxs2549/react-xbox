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
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    margin-right: .5rem;
  }
  #searchBar {
    width: 75%;
    max-width: 270px;
    height: 34px;
    margin-bottom: .5em;
    position: relative;
    input[type="search"] {
  -webkit-appearance: none;
}
    input {
      border-radius: 4px;
      width: 100%;
      border: none;
      height: 100%;
      padding: 0 .75rem;
      background-color: #343434;
      color: rgba(250, 250, 250, 0.9);
      font-size: 14px;
      letter-spacing: .5px;
      &:focus {
        outline: none;
      }
    }
    ion-icon {
      position: absolute;
      right: .5rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

const Cats = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "home", to: "/" },
    {
      name: "game pass",
      sublinks: ["overview", "browse games", "Xbox Game Pass for PC"],
    },
    {
      name: "games",
      sublinks: ["console games", "PC games", "all games"],
    },
    {
      name: "devices",
      sublinks: ["consoles", "accessories", "PC devices"],
    },
    { name: "play now", to: "play-now" },
    {
      name: "community",
      sublinks: ["for everyone", "xbox gear shop", "apps & entertainment"],
    },
    {
      name: "support",
      sublinks: ["xbox status", "help topics", "new in support"],
    },
    {
      name: "my xbox",
      sublinks: ["home", "profile"],
    },
  ];
  return (
    <StyledCats>
      <button onClick={() => setIsOpen(!isOpen)}>
        <img src={twenty} alt="" />
        <ion-icon name="chevron-down-outline"></ion-icon>
      </button>
      <div id="searchBar">
        <input type="search" placeholder="Search all Microsoft platforms" />
        <ion-icon name="search-outline"></ion-icon>
      </div>
      <Menu open={isOpen} top="99px" links={links} fromRight />
    </StyledCats>
  );
};

export default Cats;
