import React from "react";
import styled from "styled-components";
const StyleHeader = styled.header`
  background: linear-gradient(to top, #ff7e5f, #feb47b);  h1 {
    color: seagreen;
    &:hover{
      color: turquoise
    }
  };
  `

export default function Header() {
  return (
    <StyleHeader className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </StyleHeader>
  );
}
