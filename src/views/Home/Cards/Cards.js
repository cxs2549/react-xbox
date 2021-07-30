import styled from "styled-components";
import Card from "./Card/Card";
import card1 from "../../../assets/cards/lg-card-3.jpeg";
import card2 from "../../../assets/cards/lg-card-5.jpeg";
import card3 from "../../../assets/cards/lg-card-4.jpeg";
import card4 from "../../../assets/cards/lg-card-1.jpeg";

const StyledCards = styled.div`
  color: white;
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: .5fr 1fr;
    gap: 1rem;
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Cards = () => {
  const cards = [
    {
      title: "ultimate game sale",
      subtitle: "Save up to 80% on select Xbox games",
      image: card1,
      button: "shop now",
      float: true,
      color: "#2E162E"
    },
    {
      title: "xbox game pass ultimate",
      subtitle:
        "Includes over 100 high-quality games, Xbox Live Gold, EA Play, and Perks",
      image: card2,
      button: "join now",
      float: false,
      color: "#107C11",
    },
    {
      title: "xbox design lab",
      subtitle: "Make it yours",
      image: card3,
      button: "get it now",
      float: true,
      color: "#315064"
    },
    {
      title: "death's door",
      subtitle: "Reap the souls of the dead",
      image: card4,
      button: "get it now",
      float: true,
    },
  ];
  return (
    <StyledCards>
      {cards.map((card, i) => (
        <Card
          key={i}
          title={card.title}
          subtitle={card.subtitle}
          image={card.image}
          button={card.button}
          float={card.float}
          color={card.color}
          flexRows={card.flewRow}
          height={card.height}
        />
      ))}
    </StyledCards>
  );
};

export default Cards;
