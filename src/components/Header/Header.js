import { useState } from "react";
import styled from "styled-components";
import Cats from "./Cats/Cats";
import Menu from "./Navbar/Menu/Menu";
import Navbar from "./Navbar/Navbar";

const StyledHeader = styled.header`
  background-color: var(--brandBlack);
  color: white;
  width: 100%;
  position: relative;
  z-index: 3;
 
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isOpen20) setIsOpen20(false);
    setIsOpen(!isOpen);
    if(!isOpen) document.getElementById('main').style.marginTop = '0px'
    if(isOpen) document.getElementById('main').style.marginTop = '120px'
  
  };

  const links = [
    { name: "microsoft 365", to: "m365" },
    { name: "office", to: "office" },
    { name: "windows", to: "windows" },
    { name: "surface", to: "surface" },
    { name: "xbox", to: "xbox" },
    { name: "deals", to: "deals" },
    { name: "support", to: "support" },
    {
      name: "software",
      sublinks: ["windows apps", "oneDrive", "outlook"],
    },
    {
      name: "PCs & devices",
      sublinks: ["xbox game pass ultimate", "xbox live gold", "xbox games"],
    },
    {
      name: "entertainment",
      sublinks: ["xbox game pass ultimate", "xbox live gold", "xbox games"],
    },
    {
      name: "business",
      sublinks: ["xbox game pass ultimate", "xbox live gold", "xbox games"],
    },
    {
      name: "developer & IT",
      sublinks: ["xbox game pass ultimate", "xbox live gold", "xbox games"],
    },
    {
      name: "other",
      sublinks: ["xbox game pass ultimate", "xbox live gold", "xbox games"],
    },
    { name: "view sitemap", to: "sitemap" },
  ];

  const [isOpen20, setIsOpen20] = useState(false);
  const handleClick20 = () => {
    if (isOpen) setIsOpen(false);
    setIsOpen20(!isOpen20);
    if(!isOpen20) document.getElementById('main').style.marginTop = '0px'
    if(isOpen20) document.getElementById('main').style.marginTop = '120px'
  };

  const catLinks = [
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
    { name: "play now", to: "/play" },
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
    <div>
      <StyledHeader>
        <Navbar clicked={handleClick} open={isOpen} />
        <Cats clicked={handleClick20} open={isOpen20} />
      </StyledHeader>
      <Menu open={isOpen} clicked={handleClick} links={links} />
      <Menu open={isOpen20} clicked={handleClick20} links={catLinks} />
    </div>
  );
};

export default Header;
