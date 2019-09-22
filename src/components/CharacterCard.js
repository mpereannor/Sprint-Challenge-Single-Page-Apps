import React from "react";
import styled from 'styled-components';

const CharacterDesign = styled.div`
  display: flex;
  flex-direction: column;

`


export default function CharacterCard (props) {

  return (
  
  <CharacterDesign className='character-card'>
    <img src={props.ximage}/> 
    <div>
      <h2>{props.xname}</h2>
      <p>{props.xspecies}</p>
      <p>{props.xgender}</p>
    </div>

  </CharacterDesign>
  )
}

