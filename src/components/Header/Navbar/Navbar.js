import { useState } from "react";
import styled from "styled-components";
import ogLogo from "../../../assets/og-logo.png";
import twentyImg from "../../../assets/20.png";
import Menu from "./Menu/Menu";
import { Link } from "react-router-dom";

const StyledNavbar = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
  max-width: var(--maxWidth);
  min-width: 350px;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }
  @media (min-width: 1600px) {
    padding: 0;
  }

  a {
    font-size: 14px;
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    white-space: nowrap;
    margin-right: 0.5em;
    transition: color 400ms;
    @media (min-width: 1536px) {
      font-size: 1rem;
    }
    &:hover {
      color: var(--brandgreenLight);
    }

    &:hover {
      color: var(--brandGreenLight);
    }
    ion-icon {
      margin-left: .5rem;
    }
  }

  #left {
    #icons {
      @media (min-width: 768px) {
        display: none;
      }
    }
    #twentyList {
      display: none;
      align-items: center;
      text-transform: capitalize;
      @media (min-width: 768px) {
        display: flex;
      }
    }
    #twenty {
      display: none;
      height: 100%;
      margin-right: 1rem;
      img {
        height: 30px;
        margin-top: 2px;
      }
      @media (min-width: 768px) {
        display: block;
        margin-left: 100px;
        padding-left: 2rem;
      }
    }

    #firstIcon {
      margin-top: 6px;
    }
  }
  #links {
    position: relative;
    margin-left: 0.5rem;
    @media (min-width: 1536px) {
      margin-left: 1rem;
    }
    &::before {
      content: "";
      position: absolute;
      left: -0.75rem;
      top: 50%;
      transform: translateY(-50%);
      height: 200%;
      width: 1px;
      background-color: var(--borderColor);
      @media (min-width: 1536px) {
        left: -1rem;
      }
    }
  }
  ul {
    display: flex;
    text-decoration: none;
    list-style-type: none;
    li {
      text-decoration: none;
      margin-right: 2rem;
      display: flex;
      align-items: center;
      &:is(:nth-child(4), :nth-child(5), :nth-child(6), :nth-child(7)) {
        display: none;
      }
      &:is(:nth-child(4), :nth-child(5), :nth-child(6)) {
        @media (min-width: 1280px) {
          display: flex;
        }
      }
      &:is(:nth-child(7)) {
        @media (min-width: 1300px) {
          display: flex;
        }
      }
      &:nth-child(8) {
        @media (min-width: 1300px) {
          display: none;
        }
      }
    }
    ion-icon {
      font-size: 16px !important;
    }
  }
  #logo {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (min-width: 768px) {
      left: 1.5rem;
      transform: translateY(-50%);
    }
    @media (min-width: 1600px) {
      left: 0;
    }
    img {
      max-width: 120px;
    }
  }

  #right {
    display: flex;
    align-items: center;
    #all {
      display: none;
      align-items: center;
      &:hover {
        color: var(--brandGreenLight);
      }
      @media (min-width: 1024px) {
        display: flex;
        margin-right: 1.5rem;
      }
      ion-icon {
        font-size: 16px !important;
      }
    }
    a {
      @media (min-width: 1024px) {
        margin-right: 0.5em;
        display: block;
      }
    }
    #rightIcons {
      display: flex;
      align-items: center;

      ion-icon:nth-child(2),
      ion-icon:last-child {
        margin-left: 1.5rem;
      }
    }
    ion-icon:first-child {
      display: none;
      @media (min-width: 768px) {
        display: block;
      }
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
  const navLinks = [
    { name: "game pass", sublinks: [] },
    { name: "games", sublinks: [] },
    { name: "devices", sublinks: [] },
    { name: "play now", sublinks: [] },
    { name: "community", sublinks: [] },
    { name: "support", sublinks: [] },
    { name: "my xbox", sublinks: [] },
    { name: "more", sublinks: [] },
  ];

  return (
    <StyledNavbar>
      <div id="left">
        <div id="icons">
          <div id="firstIcon" onClick={() => setIsOpen(!isOpen)}>
            <ion-icon name="menu-outline" size="large"></ion-icon>
          </div>
        </div>
        <div id="twentyList">
          <div id="twenty">
            <img src={twentyImg} alt="" />
          </div>
          <div id="links">
            <ul>
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link to="/" className="navLink">
                    {link.name}
                  <ion-icon name="chevron-down-outline"></ion-icon>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div id="logo">
        <Link to="/">
          <img src={ogLogo} alt="" />
        </Link>
      </div>
      <div id="right">
        <div id="all">
          <Link to="/" className="navLink">
            All Microsoft
          </Link>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
        <div id="rightIcons">
          <ion-icon name="search-outline"></ion-icon>
          <ion-icon name="cart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>
      <Menu open={isOpen} top="99px" links={links} />
    </StyledNavbar>
  );
};

export default Navbar;
