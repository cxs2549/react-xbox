import { Link } from "react-router-dom";
import styled from "styled-components";
import useClickOutside from "../../../../hooks/useClickOutside";

const StyledDrops = styled.div`
  position: absolute;

  top: 26px;
  width: auto;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: max-content;
  left: ${(props) => (props.wide ? "50%" : "0")};
  transform: ${(props) => (props.wide ? "translateX(-50%)" : "")};
  background-color: #3f3f3f;
  border: var(--borderColor);
  color: #e8e8e8;
  display: ${(props) => (props.open ? "grid" : "none")};
  flex-wrap: wrap;
  grid-template-columns: ${(props) => (props.wide ? "1fr 1fr" : "1fr")};
  border-radius: 4px;
  max-width: min-content;
  overflow-y: scroll;
  h4,
  li {
    padding: 1rem;
    padding-right: 2rem;
    text-transform: capitalize;
  }
  h4 {
    border-bottom: 1px solid #454545;
    background-color: #222222;
    color: white;
  }
  #content {
    width: 100%;
  }
  ul {
    overflow: hidden;
    display: flex;
    flex-flow: column;
    width: 100%;

   
    min-width: 16vw;
    li {
      padding: 1rem !important;
      width: 100% !important;
      height: 100%;
      &:first-child {
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
      }
      &:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      &:hover {
        background-color: #4f4f4f;
        color: var(--brandGreenLight);
      }
    }
  }
`;

const DropMenu = ({ open, clicked, lists, wide }) => {


  const domNode = useClickOutside(() => {
    clicked()
  });
  return (
    <StyledDrops open={open} wide={wide} ref={domNode}>
      {lists.map((list, i) => (
        <div key={i} id="content">
          {list.title && <h4>{list.title}</h4>}
          <ul>
            {lists[i].links.map((link, i) => (
              <li key={i}><Link to="/in-dev">{link}</Link></li>
            ))}
          </ul>
        </div>
      ))}
    </StyledDrops>
  );
};

export default DropMenu;
