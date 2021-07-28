import styled from "styled-components";
import twenty from "../../../assets/20.png";

const StyledCats = styled.div`
  background-color: var(--brandBlack);
  color: whitesmoke;
  padding: 0 1rem;
  height: 40px;
  display: flex;
  align-items: center;
  > div {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  img {
    max-height: 60%;
    margin-right: 1.5rem;
  }
`;

const Cats = () => {
  return (
    <StyledCats>
      <div>
        <img src={twenty} alt="" />
        <ion-icon name="chevron-down-outline"></ion-icon>
      </div>
    </StyledCats>
  );
};

export default Cats;
