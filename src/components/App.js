import React, { useState, useEffect } from "react";
//import Navigation from "./Navigation";
import HomePage from "./HomePage";
import styled from "styled-components/macro";
import PageStyle from "./Page";
import GlobalStyle from "./GlobalStyle";
import Form from "./Form";
import NavigationIcons from "./NavigationIcons";
import { getCards, postCard, patchCard } from "./services";
import Landing from "./Landing";

//console.log(cardfromGet);

const App = () => {
  useEffect(() => {
    getCards().then(setCards);
  }, []);

  const [activeIndex, setActiveIndex] = useState("home");
  const [cards, setCards] = useState([]);

  const handleSubmit = cardData => {
    //setCards([...cards, { title, question, answer }]);
    postCard(cardData).then(card => setCards([...cards, card]));
  };

  function handleBookmarkClick(card) {
    patchCard(card._id, { isBookmarked: !card.isBookmarked }).then(
      updatedCard => {
        const index = cards.findIndex(card => card._id === updatedCard._id);
        setCards([
          ...cards.slice(0, index),
          { ...card, isBookmarked: updatedCard.isBookmarked },
          ...cards.slice(index + 1)
        ]);
      }
    );
  }

  function renderPage() {
    const pages = {
      landing: <Landing onClick={setActiveIndex} />,
      home: (
        <PageStyle>
          <HomePage cards={cards} onBookmarkClick={handleBookmarkClick} />
        </PageStyle>
      ),
      add: (
        <PageStyle>
          <Form onSubmit={handleSubmit} />
        </PageStyle>
      ),
      favorites: <PageStyle>Bookmarks</PageStyle>,
      settings: <PageStyle>Settings</PageStyle>
    };

    return pages[activeIndex] || <section>404</section>;
  }

  return (
    <AppStyle>
      <GlobalStyle />
      {renderPage()}
      {/* <Navigation
        buttonTexts={["Home", "Add", "Bookmarks", "Settings"]}
        onClick={setActiveIndex}
      /> */}

      <NavigationIcons
        // buttonTexts={["Home", "Favorites", "Settings"]}
        onClick={setActiveIndex}
      />
      {/* {landingPage()} */}
    </AppStyle>
  );
};

const AppStyle = styled.div`
  display: grid;
  grid-template-rows: auto 0px;
  min-height: 100vh;
  font-family: sans-serif;
`;

export default App;
