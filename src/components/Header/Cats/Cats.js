import styled from "styled-components";
import twenty from "../../../assets/20.png";

const StyledCats = styled.div`
  background-color: var(--brandBlack);
  padding: 0 1rem;
  height: 60px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 59px;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border-bottom: 1px solid var(--borderColor); */
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
    margin-right: 0.5rem;
  }
  #searchBar {
    width: 75%;
    max-width: 65%;
    height: 34px;
    position: relative;
    input[type="search"] {
      -webkit-appearance: none;
    }
    input {
      border-radius: 4px;
      width: 100%;
      border: none;
      border: 1px solid var(--borderColor);
      height: 100%;
      padding: 0 0.75rem;
      background-color: transparent;
      color: rgba(250, 250, 250, 0.9);
      font-size: 14px;
      letter-spacing: 0.5px;
      &:focus {
        outline: none;
        box-shadow: 0px 0px 14px #5dc21e;
        ~ #searchIcon {
          box-shadow: 0px 0px 10px #5dc21e;
        }
      }
    }
    #searchIcon {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 40px;
      height: 40px;
      background-color: red;
      border-radius: 4px;
      border: 1px solid var(--borderColor);
      background-color: var(--brandBlack);
      display: grid;
      place-items: center;
    }
  }
  #chevron {
    transform: ${props => (props.open ? 'rotate(180deg)' : '')};
  }
`;

const Cats = ({clicked, open}) => {
  
  return (
    <StyledCats open={open}>
      <button onClick={clicked}>
        <img src={twenty} alt="" />
        <div id="chevron">
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
      </button>
      <div id="searchBar">
        <input type="search" placeholder="Search" />
        <div id="searchIcon">
          <ion-icon name="search-outline"></ion-icon>
        </div>
      </div>
    </StyledCats>
  );
};

export default Cats;
