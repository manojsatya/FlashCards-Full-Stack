import React from "react";
import Card from "./Card";
import styled from "styled-components/macro";

function HomePage({ cards }) {
  return (
    <HomePageStyle>
      <h1>HomePage</h1>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          question={card.question}
          answer={card.answer}
        />
      ))}
    </HomePageStyle>
  );
}

const HomePageStyle = styled.section`
  * {
    display: grid;
  }
`;

export default HomePage;
