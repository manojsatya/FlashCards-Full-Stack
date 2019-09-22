import React, { useState } from "react";
//import Navigation from "./Navigation";
import HomePage from "./HomePage";
import styled from "styled-components/macro";
import PageStyle from "./Page";
import GlobalStyle from "./GlobalStyle";
import Form from "./Form";
import NavigationIcons from "./NavigationIcons";

const App = () => {
  const [activeIndex, setActiveIndex] = useState("home");
  const [cards, setCards] = useState([
    {
      title: "Foo",
      question: "What?",
      answer: "That!"
    },
    {
      title: "Bar",
      question: "This?",
      answer: "That!"
    },
    {
      title: "Foo",
      question: "What?",
      answer: "That!"
    },
    {
      title: "Bar",
      question: "This?",
      answer: "That!"
    },
    {
      title: "Foo",
      question: "What?",
      answer: "That!"
    },
    {
      title: "Bar",
      question: "This?",
      answer: "That!"
    }
  ]);

  const addCard = ({ title, question, answer }) => {
    setCards([...cards, { title, question, answer }]);
  };

  function renderPage() {
    const pages = {
      home: (
        <PageStyle>
          <HomePage cards={cards} />
        </PageStyle>
      ),
      add: (
        <PageStyle>
          <Form addCard={addCard} />
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
        buttonTexts={["Home", "Favorites", "Settings"]}
        onClick={setActiveIndex}
      />
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
