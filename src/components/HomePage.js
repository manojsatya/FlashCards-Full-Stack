import React from "react";
import Card from "./Card";

function HomePage({ cards }) {
  return (
    <section>
      <h1>HomePage</h1>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          question={card.question}
          answer={card.answer}
        />
      ))}
    </section>
  );
}

export default HomePage;
