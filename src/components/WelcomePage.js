import React from "react";
import styled from "styled-components";
const StyleMain = styled.section`
  background: linear-gradient(to top, #ee0979, #ff6a00); 

  header{
    h1{
      &:hover{
    opacity: 0.8;
    color: purple
    font-style: italic;
    padding-bottom: 10px;
      }
    }
  }
`

export default function WelcomePage() {
  return (
    <StyleMain className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
      </header>
    </StyleMain>
  );
}
