import styled from "styled-components";
import ogLogo from "../../../assets/og-logo.png";

const StyledNavbar = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  position: relative;
  border-bottom: 1px solid var(--borderColor);

  #left,
  #right {
    display: flex;
    align-items: center;
    
    ion-icon:nth-child(2) {
      margin-left: 1.5rem;
    }
  }
  #right {
    ion-icon:last-child {
    }
  }
  #logo {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      max-width: 120px;
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <div id="left">
        <ion-icon name="menu-outline" size="large"></ion-icon>
        <ion-icon name="search-outline"></ion-icon>
      </div>
      <div id="logo">
        <img src={ogLogo} alt="" />
      </div>
      <div id="right">
        <ion-icon name="cart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
