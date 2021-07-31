import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #333333;
  color: #ffffffe8;
  padding: 2.5rem 1rem;
  @media (min-width: 768px) {
    padding: 2.5rem 1.5rem;
  }
  #wrapper {
    max-width: var(--maxWidth);
    margin: 0 auto;
  }
  #links {
    display: grid;
    @media (min-width: 640px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
    #group {
      display: flex;
      flex-flow: column;
      padding-bottom: 2rem;
      h3 {
        margin-bottom: 1rem;
        text-transform: capitalize;
      }
      a {
        color: inherit;
        margin-bottom: 0.75rem;
        text-decoration: none;
        text-transform: capitalize;
        &:hover {
          text-decoration: underline;
          color: var(--brandGreenLight);
        }
      }
    }
  }
  #lang {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-bottom: 1.5rem;
    &:hover {
      text-decoration: underline;
      color: var(--brandGreenLight);
    }
  }
  #corpLinks {
    text-transform: capitalize;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 0.25rem;
    column-gap: 1rem;
    a {
      color: inherit;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
        color: var(--brandGreenLight);
      }
    }
    p {
      padding-top: 1rem;
      @media (min-width: 1024px) {padding-top: 0}
    }
  }
`;

const Footer = () => {
  const links = [
    {
      title: "browse",
      links: ["xbox consoles", "xbox games", "xbox game pass"],
    },
    {
      title: "resources",
      links: ["xbox news", "xbox support", "feedback", "community standards"],
    },
    {
      title: "microsoft store",
      links: ["microsoft account", "microsoft store support", "returns"],
    },
    {
      title: "for developers",
      links: ["games", "ID@Xbox", "windows 10", "creators program"],
    },
  ];
  const corpLinks = [
    "sitemap",
    "contact microsoft",
    "privacy",
    "terms of use",
    "trademarks",
    "third party notices",
    "about our ads",
  ];
  return (
    <StyledFooter>
      <div id="wrapper">
        <div id="links">
          {links.map((link, i) => (
            <div id="group" key={i}>
              <h3>{link.title}</h3>
              {link.links.map((link, i) => (
                <Link key={i} to="/">
                  {link}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div id="lang">
          <ion-icon name="earth-outline"></ion-icon>
          <span>English (United States)</span>
        </div>
        <div id="corpLinks">
          {corpLinks.map((link, i) => (
            <Link to="/" key={i}>
              {link}
            </Link>
          ))}
          <p>&copy; 2021 SuperVision Design for Microsoft</p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
