import React from "react";
import Card from "./Card";
import styled from "styled-components/macro";

//import Slider from "react-slick";

function HomePage({ cards, onBookmarkClick }) {
  return (
    <HomePageStyle>
      <h1>HomePage</h1>
      <SliderContainer>
        {cards.map((card, index) => (
          <Card
            key={index}
            // title={card.title}
            // question={card.question}
            // answer={card.answer}
            // isBookmarked={card.isBookmarked}
            // tags={card.tags}
            {...card}
            onBookmarkClick={() => onBookmarkClick(card)}
          />
        ))}
      </SliderContainer>
    </HomePageStyle>
  );
}

const HomePageStyle = styled.section`
  * {
    display: grid;
  }
`;

const SliderContainer = styled.div``;

export default HomePage;
