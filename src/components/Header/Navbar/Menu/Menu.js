import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledMenu = styled.div`
  position: fixed;
  background-color: transparent;
  top: 99px;
  width: 100%;
  height: 100%;
  color: white;
  left: 0;
  transition: all 400ms;
  overflow-y: scroll;
  scrollbar-width: none;
  z-index: -3;
  display: ${(props) => (props.open ? "block" : "none")}; @media
    (min-width: 768px) {
    display: none;
  }
  #item {
    position: relative;
    padding: 1rem;
    background-color: #333;
    border-bottom: 1px solid var(--borderColor);
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
      filter: brightness(1.1);
    }
    .active {
      opacity: 1;
    }
    a,
    p {
      color: white;
      width: 100%;
      height: 100%;
      text-transform: capitalize;
      text-decoration: none;
      font-size: 1rem;
    }
  }
  #submenu {
    #subItem {
      padding: 1rem;
      padding-left: 3rem;
      background-color: #262626;
      border-bottom: 1px solid var(--borderColor);
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      transition: 1s;
      text-transform: capitalize;
      &:hover {
        filter: brightness(1.2);
      }
    }
  }
`;

const Menu = ({ open, top, links, fromRight }) => {
  const [isOpen, setIsOpen] = useState({ item: null });
  const { item } = isOpen;

  const handleClick = (val) => {
    if (item === val) {
      setIsOpen({ ...isOpen, item: null });
    } else {
      setIsOpen({
        ...isOpen,
        item: val,
      });
    }
  };

  return (
    <StyledMenu open={open} top={top} fromRight={fromRight}>
      {links.map((link, i) => (
        <div key={i}>
          <div id="item" onClick={handleClick.bind(null, link.name)}>
            {link.to && <NavLink to={link.to}>{link.name}</NavLink>}
            {!link.to && <p>{link.name}</p>}
            {link.sublinks && <ion-icon name="chevron-down-outline"></ion-icon>}
          </div>
          {link.sublinks && item === link.name && (
            <div id="submenu">
              {link.sublinks.map((link, i) => (
                <div key={i} id="subItem">
                  {link}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </StyledMenu>
  );
};

export default Menu;
