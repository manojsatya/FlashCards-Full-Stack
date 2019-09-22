import React, { useState } from "react";
import styled from "styled-components/macro";
//import { makeStyles } from "@material-ui/core/styles";
//import Button from "@material-ui/core/Button";
//import { teal } from "@material-ui/core/colors";
//import HUE from "@material-ui/core/colors/HUE";

function Form({ addCard }) {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  //const classes = useStyles();
  //const color = HUE[SHADE];
  //   const accent = teal.A700;

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
        {/* <Button variant="contained" className={classes.button} type="submit">
          Primary
        </Button> */}
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
    background-color: teal[A700];
  }
`;

// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1)
//   }
// }));

export default Form;
