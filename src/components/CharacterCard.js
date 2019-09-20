import React from "react";

export default function CharacterCard (props) {

  return (
  
  <div className='character-card'>
    <h2>{props.xname}</h2>
    <p>{props.xspecies}</p>
    <p>{props.xgender}</p> 
  </div>
  )
}

