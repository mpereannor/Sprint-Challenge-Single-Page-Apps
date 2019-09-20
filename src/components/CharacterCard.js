import React from "react";
import {Link} from "react-router-dom";

export default function CharacterCard(props) {
  const{id, title, status, species, type, gender} = props.character

  return (
  
  
  // <span>todo: character</span>;
  <div className='character-card'>
    <h2>{title}</h2>
    <p>{status}</p>
    <p>{species}</p>
    <p>{type}</p>
    <p>{gender}</p>
  </div>
  )
}
