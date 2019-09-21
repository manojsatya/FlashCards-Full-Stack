import React from "react";
import styled from "styled-components/macro";

function Navigation({ buttonTexts, onClick }) {
  return (
    <NavigationStyled>
      {buttonTexts.map((text, index) => {
        return (
          <button onClick={() => onClick(index)} key={index}>
            {text}
          </button>
        );
      })}
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;

  button {
    font-size: 2em;
    flex-grow: 1;
  }
`;

export default Navigation;
