import React, { useState } from "react";
import styled from "styled-components/macro";

function Card({ title, question, answer }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  function toggleAnswer() {
    setIsAnswerVisible(!isAnswerVisible);
  }

  return (
    <CardStyle onClick={toggleAnswer}>
      <h2>{title}</h2>
      <p>{question}</p>
      {isAnswerVisible && <Answer text={answer} />}
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
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
`;

export default Card;
