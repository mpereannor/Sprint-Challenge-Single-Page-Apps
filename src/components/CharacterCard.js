import React from "react";
import styled from 'styled-components';

const CharacterDesign = styled.div`
  display: flex;
  // justify-content: center;
  // vertical-align: baseline;
  margin: auto;
`;


export default function CharacterCard (props) {

  return (
  
  <CharacterDesign className='character-card'>
    <div>
      <img src={props.ximage}/> 
    </div>
    <div>
      <h3>{props.xname}</h3>
      <p>{props.xspecies}</p>
      <p>{props.xgender}</p>
    </div>

  </CharacterDesign>
  )
}

