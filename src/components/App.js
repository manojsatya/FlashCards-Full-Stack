import React, { useState, useEffect } from "react";
//import Navigation from "./Navigation";
import HomePage from "./HomePage";
import styled from "styled-components/macro";
//import PageStyle from "./Page";
import GlobalStyle from "./GlobalStyle";
import Form from "./Form";
import NavigationIcons from "./NavigationIcons";
import { getCards, postCard, patchCard, getNews } from "./services";
//import Landing from "./Landing";
import { BrowserRouter as Router, Route } from "react-router-dom";

//console.log(cardfromGet);

const App = () => {
  useEffect(() => {
    getCards().then(setCards);
  }, []);

  //const [activeIndex, setActiveIndex] = useState("home");
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

  function displayNews() {
    getNews().then(data => console.log(data));
  }

  displayNews();
  // function renderPage() {
  //   const pages = {
  //     landing: <Landing onClick={setActiveIndex} />,
  //     home: (
  //       <PageStyle>
  //         <HomePage cards={cards} onBookmarkClick={handleBookmarkClick} />
  //       </PageStyle>
  //     ),
  //     add: (
  //       <PageStyle>
  //         <Form onSubmit={handleSubmit} />
  //       </PageStyle>
  //     ),
  //     favorites: <PageStyle>Bookmarks</PageStyle>,
  //     settings: <PageStyle>Settings</PageStyle>
  //   };

  //   return pages[activeIndex] || <section>404</section>;
  // }

  return (
    <Router>
      <AppStyle>
        <GlobalStyle />
        {/* {renderPage()} */}
        {/* <Navigation
        buttonTexts={["Home", "Add", "Bookmarks", "Settings"]}
        onClick={setActiveIndex}
      /> */}
        <Route
          exact
          path="/"
          render={() => (
            <HomePage cards={cards} onBookmarkClick={handleBookmarkClick} />
          )}
        />

        <Route path="/add" render={() => <Form onSubmit={handleSubmit} />} />

        <NavigationIcons
        // buttonTexts={["Home", "Favorites", "Settings"]}
        // onClick={setActiveIndex}
        />
        {/* {landingPage()} */}
      </AppStyle>
    </Router>
  );
};

const AppStyle = styled.div`
  display: grid;
  grid-template-rows: auto 60px;
  min-height: 100vh;
  font-family: sans-serif;
`;

export default App;
