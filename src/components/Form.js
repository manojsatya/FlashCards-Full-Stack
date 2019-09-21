import React, { useState } from "react";
import styled from "styled-components/macro";

function Form({ addCard }) {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    addCard({ title, question, answer });
    setTitle("");
    setQuestion("");
    setAnswer("");
  }
  return (
    <FormStyle>
      <h1>Question and Answer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Title"
            name="title"
            value={title}
            onChange={event => setTitle(event.target.value)}
          ></input>
        </div>

        <div>
          <h3>Question:</h3>
          <textarea
            cols="85"
            rows="10"
            placeholder="Question"
            name="question"
            value={question}
            onChange={event => setQuestion(event.target.value)}
          ></textarea>
        </div>
        <div>
          <h3>Answer:</h3>
          <textarea
            cols="85"
            rows="10"
            placeholder="Answer"
            name="answer"
            value={answer}
            onChange={event => setAnswer(event.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </FormStyle>
  );
}

const FormStyle = styled.div`
  * {
    display: grid;
  }

  input {
    height: 30px;
    border-radius: 0.5rem;
    box-shadow: 0 10px 10px #0002;
  }

  textarea {
    height: 120px;
    border-radius: 0.5rem;
    box-shadow: 0 10px 10px #0002;
  }

  button {
    height: 30px;
    margin: 0 auto;
    margin-top: 20px;
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 10px 10px #0002;
  }
`;

export default Form;
