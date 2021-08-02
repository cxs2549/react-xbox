import styled from "styled-components";

const StyledSearchbar = styled.div`
  position: absolute;
  height: 30px;
  width: 340px;
  top: -0.65rem;
  right: 5.8rem;
  #wrapper {
    height: 30px;
    position: relative;
  }
  input {
    width: 100%;
    height: 100%;
    padding: 1.5rem 1rem;
    border-radius: 5px;
    border: none;
    background-color: #242424;
    font-size: 1rem;
    color: white;
    &:focus {
      outline: none;
    }
  }
  ion-icon {
    position: absolute;
    right: 1rem;
    top: 40%;
  }
`;

const Searchbar = ({ close }) => {
  return (
    <StyledSearchbar>
      <div id="wrapper">
        <input type="search" placeholder="Search all Microsoft platforms..." />
      </div>
    </StyledSearchbar>
  );
};

export default Searchbar;
