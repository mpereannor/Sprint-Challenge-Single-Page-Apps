import React from "react";
import styled from 'styled-components';

const CharacterDesign = styled.div`
  
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 100%
  padding-bottom: 20px;
`;

const InfoDesign = styled.div`
  background: linear-gradient(to top, #ff00cc, #333399);
  padding-left: 40px;
  padding-right: 40px;
  flex-wrap: wrap;
`;


export default function CharacterCard (props) {

  return (
  
  <CharacterDesign className='character-card'>
    <div>
      <img src={props.ximage}/> 
    </div>
    <InfoDesign>
      <h3>{props.xname}</h3>
      <p>{props.xspecies}</p>
      <p>{props.xgender}</p>
    </InfoDesign>

  </CharacterDesign>
  )
}

