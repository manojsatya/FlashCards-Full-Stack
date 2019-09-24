import React, { useState } from "react";
import styled from "styled-components/macro";

function Card({ title, question, answer, isBookmarked }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  function toggleAnswer() {
    setIsAnswerVisible(!isAnswerVisible);
  }

  return (
    <CardStyle onClick={toggleAnswer}>
      <h2>{title}</h2>
      <p>{question}</p>
      {/* <i>{isBookmarked ? "Bookmarked" : "Not Bookmarked"}</i> */}
      {isAnswerVisible && <Answer text={answer} />}
      <BookmarkStyled active={isBookmarked} />
    </CardStyle>
  );

  function Answer({ text }) {
    return (
      <React.Fragment>
        <hr />
        <p>{text}</p>
      </React.Fragment>
    );
  }
}

const CardStyle = styled.section`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
  margin-bottom: 20px;
  /* margin: 20px; */
`;

const BookmarkStyled = styled.div`
  position: absolute;
  top: -10px;
  right: 20px;
  height: 40px;
  border: 20px solid ${isBookmarked ? "hotpink" : "darkgrey"};
  border-bottom: 20px solid transparent;
`;

export default Card;
