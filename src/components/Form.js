import React from "react";
import styled from "styled-components/macro";

function Form({ onSubmit }) {
  return (
    <main>
      <h1>Question and Answer</h1>
      <FormStyle onSubmit={handleSubmit}>
        <div>
          <input placeholder="Title" name="title"></input>
        </div>

        <div>
          <h3>Question:</h3>
          <textarea
            cols="85"
            rows="10"
            placeholder="Question"
            name="question"
          ></textarea>
        </div>
        <div>
          <h3>Answer:</h3>
          <textarea
            cols="85"
            rows="10"
            placeholder="Answer"
            name="answer"
          ></textarea>
        </div>
        {/* <input type="checkbox" name="isBookmarked"></input> */}
        <button type="submit">Submit</button>
        {/* <Button variant="contained" className={classes.button} type="submit">
          Primary
        </Button> */}
      </FormStyle>
    </main>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    console.log(data);
    onSubmit(data);
  }
}

const FormStyle = styled.form`
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
