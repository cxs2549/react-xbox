import styled from "styled-components";
import Cats from "./Cats/Cats";
import Navbar from "./Navbar/Navbar";

const StyledHeader = styled.header`
  background-color: var(--brandBlack);
  color: white;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
      <Cats />
    </StyledHeader>
  );
};

export default Header;
