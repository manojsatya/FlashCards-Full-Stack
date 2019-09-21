import React, { useState } from "react";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import Practise from "./components/Practise";

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
    <div>
      {renderPage()}
      <Navigation
        buttonTexts={["Home", "Practise", "Bookmarks", "Settings"]}
        onClick={setActiveIndex}
      />
    </div>
  );
};

export default App;
