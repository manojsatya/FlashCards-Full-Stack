import React, { useState } from "react";
import Navigation from "./Navigation";
import HomePage from "./HomePage";
import styled from "styled-components/macro";
import PageStyle from "./Page";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
    }
  ]);

  function renderPage() {
    const pages = {
      0: <HomePage cards={cards} />,
      1: <PageStyle>Practise</PageStyle>,
      2: <PageStyle>Bookmarks</PageStyle>,
      3: <PageStyle>Settings</PageStyle>
    };

    return pages[activeIndex] || <section>404</section>;
  }

  return (
    <AppStyle>
      <GlobalStyle />
      {renderPage()}
      <Navigation
        buttonTexts={["Home", "Practise", "Bookmarks", "Settings"]}
        onClick={setActiveIndex}
      />
    </AppStyle>
  );
};

const AppStyle = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  height: 100vh;
  font-family: sans-serif;
`;

export default App;
