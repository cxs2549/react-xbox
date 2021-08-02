import styled from "styled-components";
import logo from "../../assets/logo.png";

const StyledAccount = styled.div`
  background-color: var(--brandGreen);
  padding: 2rem 0.5rem;
  @media (min-width: 1536px) {
    background-image: linear-gradient(to right, black 1%, transparent);
  }
  > div {
    background-color: #000;
    box-shadow: 0px 3px 15px #ffffff33;
    color: white;
    max-width: 500px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    padding-bottom: 3rem;
    display: flex;
    flex-flow: column;
    gap: 1rem;
    img {
      max-width: 130px;
    }
    h3 {
      font-size: 140%;
    }
    #inputSection {
      width: 100%;
      input {
        border: none;
        border-radius: 0;
        width: 100%;
        border-bottom: 1px solid var(--borderColor);
        padding-bottom: 0.5rem;
        background-color: transparent;
        color: white;
        margin-bottom: 0.75rem;
        font-size: .9rem;
        &:focus {
          outline: none;
        }
      }
      #register {
        font-size: 75%;
        a {
          margin-left: 0.25rem;
          text-decoration: none;
          color: #0166b6;
          font-weight: 500;
        }
      }
    }
    button {
      display: block;
      width: 20%;
      background-color: #0166b6;
      border: none;
      color: white;
      padding: 4px 12px 4px 12px;
      font-size: 100%;
      font-weight: 700;
      margin-left: auto;
      min-width: 94px;
      cursor: pointer;
    }
  }
  > div:last-child {
    background-color: black;
    margin-top: 1.5rem;
    padding: .5rem 1.5rem;
    > div {
      display: flex;
      align-items: center;
      gap: 1rem;
      a {
        text-decoration: none;
        color: #0166b6;
      }
    }
  }
`;

const Account = () => {
  return (
    <StyledAccount>
      <div>
        <div>
          <img src={logo} alt="" />
        </div>
        <h3>Sign in</h3>
        <div id="inputSection">
          <input type="text" placeholder="Email, phone, or Skype" />
          <br />
          <div id="register">
            <span>No account?</span>
            <a href="/">Create one!</a>
          </div>
        </div>
        <br />
        <button>Next</button>
      </div>
      <div>
        <div>
          <ion-icon name="key-outline" size="large"></ion-icon>
          <a href="/">Sign in options</a>
        </div>
      </div>
    </StyledAccount>
  );
};

export default Account;
