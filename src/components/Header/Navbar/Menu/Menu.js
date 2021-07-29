import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledMenu = styled.div`
  position: fixed;
  left: 0;
  top: ${(props) => props.top};
  width: 100%;
  height: 100%;
  background-color: var(--brandBlack);
  color: white;
  opacity: ${(props) => (props.open ? 1 : 0)};
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  transition: opacity 400ms;
  overflow-y: scroll;
  scrollbar-width: none;
  padding-bottom: 60px;
  @media (min-width: 768px) {
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
      opacity: .7;
    }
    .active {
      opacity: 1;
    }
    a, p {
      color: white;
      text-transform: capitalize;
      opacity: 0.85;
      text-decoration: none;
      &:hover {
        opacity: 0.85;
      }
    }
  }
  #submenu {
    #subItem {
      padding: 1rem;
      padding-left: 3rem;
      background-color: #333;
      border-bottom: 1px solid var(--borderColor);
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      transition: 1s;
      text-transform: capitalize;
      &:hover {
        opacity: .8;
      }
    }
  }
`;

const Menu = ({ open, top, links }) => {
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
    <StyledMenu open={open} top={top}>
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
