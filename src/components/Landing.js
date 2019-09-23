import React from "react";
import styled from "styled-components/macro";

function Landing({ onClick }) {
  return (
    <LandingStyled>
      <div>
        <label htmlFor="username">Username</label>
      </div>

      <div>
        <input type="text" name="username" placeholder="Username"></input>
      </div>

      <div>
        <label htmlFor="password">Password</label>
      </div>
      <div>
        <input type="password" name="password" placeholder="Password"></input>
      </div>
      <div>
        <button onClick={() => onClick("home")}>Skip</button>

        <button>Submit</button>
      </div>
    </LandingStyled>
  );
}

const LandingStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto auto;

  label {
    font-size: 2rem;
  }
  input {
    width: 80vw;
    height: 5vh;
    border-radius: 1rem;
  }

  button {
    padding: 10px;
    background-color: skyblue;
    margin: 10px;
  }
`;

export default Landing;
