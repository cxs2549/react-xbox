import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ogLogo from "../../../assets/og-logo.png";
import twentyImg from "../../../assets/20.png";
import DropMenu from "./DropMenu/DropMenu";
import Searchbar from "./Searchbar/Searchbar";

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background-color: var(--brandBlack);
  @media (min-width: 640px) {
    border-bottom: 1px solid var(--borderColor);
  }
`;

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  width: 100%;
  height: 100%;
  max-width: var(--maxWidth);
  min-width: 350px;
  margin: 0 auto;
  position: relative;
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
    transition: color 400ms;
    @media (min-width: 1536px) {
      font-size: 1rem;
    }
    &:hover {
      color: var(--brandgreenLight);
    }
    ion-icon {
      margin-left: 0.5em;
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
    #links {
      position: relative;
      display: flex;
      align-items: center;
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

      ul {
        display: flex;
        text-decoration: none;
        list-style-type: none;
        li {
          text-decoration: none;
          display: flex;
          align-items: center;
          position: relative;
          padding: 0 1rem;
          cursor: pointer;
          font-size: 14px;
          white-space: nowrap;
          @media (min-width: 1536px) {
            font-size: 1rem;
          }
          &:hover {
            color: var(--brandGreenLight);
          }
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
          margin-left: 0.5em;
        }
      }
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
      left: -4px;
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
      position: relative;
      &:hover {
        color: var(--brandGreenLight);
      }
      @media (min-width: 1024px) {
        display: flex;
        margin-right: 1.5rem;
      }
      #allMicro {
        font-size: 14px;
        cursor: pointer;
        @media (min-width: 1536px) {
          font-size: 1rem;
        }
      }
      ion-icon {
        font-size: 16px !important;
        margin-left: 0.5em;
      }
    }
    a {
      @media (min-width: 1024px) {
        display: block;
      }
    }
    #rightIcons {
      display: flex;
      align-items: center;
      position: relative;
      #searchButton {
        margin-top: 3px;
      }
      a {
        margin-left: 1.5rem;
      }
     
    }
    #searchButton {
      display: none;
      position: relative;
      z-index: 300;
      @media (min-width: 768px) {
        display: block;
      }
      ion-icon {

      }
    }
  }
  #chevron {
    margin-top: 4px;
  }
`;

const Navbar = ({ clicked }) => {
  const [isOpen, setIsOpen] = useState(null);

  const [isSearch, setIsSearch] = useState(false);

  const handleClick = (id) => {
    if (isOpen === id) return setIsOpen(null);
    setIsOpen(id);
  };

  const handleSearch = () => {
    setIsSearch(false)
  }

  const navLinks = [
    { name: "game pass", sublinks: [], id: "gamepass" },
    { name: "games", sublinks: [], id: "games" },
    { name: "devices", sublinks: [], id: "devices" },
    { name: "community", sublinks: [], id: "community" },
    { name: "support", sublinks: [], id: "support" },
    { name: "my xbox", sublinks: [], id: "myxbox" },
    { name: "play now", id: "playnow", to: "play" },
    { name: "more", sublinks: [], id: "more" },
  ];

  const navSubLinks = [
    [
      {
        links: ["overview", "browse games"],
      },
    ],
    [
      {
        title: "console games",
        links: [
          "shop all console games",
          "optimized games",
          "backward compatible games",
        ],
      },
      {
        title: "PC games",
        links: ["PC gaming with xbox", "xbox game pass"],
      },
      {
        title: "all games",
        links: ["explore games", "redeem code"],
      },
    ],
    [
      {
        title: "consoles",
        links: [
          "new xbox consoles",
          "new xbox series x",
          "new xbox series 5",
          "xbox all access",
        ],
      },
      {
        title: "accessories",
        links: ["shop all accessories", "design your controller", "headsets"],
      },
      {
        title: "PC devices",
        links: ["gaming PCs"],
      },
    ],
    [
      { title: "community", links: ["xbox community", "multiplayer gaming"] },
      {
        title: "for everyone",
        links: ["our philosophy", "responsible gaming"],
      },
      { title: "xbox gear shop", links: ["shop gear"] },
      {
        title: "apps & entertainment",
        links: ["xbox app for mobile", "xbox app for windows 10"],
      },
    ],
    [{ links: ["support", "xbox status", "help topics"] }],
    [{ links: ["home", "profile"] }],
  ];

  const allMSLinks = [
    { title: "software", links: ["windows apps", "oneDrive", "outlook"] },
    {
      title: "PCs & devices",
      links: ["computers", "shop xbox", "accessories"],
    },
    {
      title: "entertainment",
      links: ["xbox game pass ultimate", "xbox live gold"],
    },
    { title: "business", links: ["microsoft azure", "microsoft 365"] },
    {
      title: "developer & IT",
      links: [".NET", "visual studio", "windows server"],
    },
    {
      title: "other",
      links: ["microsoft rewards", "free downloads & security"],
    },
  ];

  return (
    <StyledWrapper>
      <StyledNavbar>
        <div id="left">
          <div id="icons">
            <div id="firstIcon" onClick={clicked}>
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
                  <li key={i} onClick={() => handleClick(link.id)}>
                    {link.to && (
                      <Link to={link.to} className="navLink">
                        {link.name}
                      </Link>
                    )}
                    {!link.to && <p>{link.name}</p>}
                    {link.sublinks && (
                      <div id="chevron">
                        <ion-icon name="chevron-down-outline"></ion-icon>
                      </div>
                    )}
                    {isOpen === link.id && link.id !== "playnow" && (
                      <DropMenu open={isOpen} lists={navSubLinks[i]} />
                    )}
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
            <div id="allMicro" className="navLink" onClick={() => handleClick("all")}>
              All Microsoft
              {isOpen === "all" && (
                <DropMenu open={isOpen} lists={allMSLinks} wide />
              )}
            </div>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </div>
          <div id="rightIcons">
            <div
              id="searchButton"
              onClick={() => setIsSearch(!isSearch)}
            >
              <ion-icon name="search-outline"></ion-icon>
            </div>
              {isSearch && <Searchbar close={handleSearch} />}
            <NavLink to="cart">
              <ion-icon name="cart-outline"></ion-icon>
            </NavLink>
            <NavLink to="account">
              <ion-icon name="person-outline"></ion-icon>
            </NavLink>
          </div>
        </div>
      </StyledNavbar>
    </StyledWrapper>
  );
};

export default Navbar;
