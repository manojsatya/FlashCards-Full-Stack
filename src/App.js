import React, { useState } from "react";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import Practise from "./components/Practise";
import styled from "styled-components/macro";

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
      1: <Practise />,
      2: <section>Bookmarks</section>,
      3: <section>Settings</section>
    };

    return pages[activeIndex] || <section>404</section>;
  }

  return (
    <AppStyle>
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
