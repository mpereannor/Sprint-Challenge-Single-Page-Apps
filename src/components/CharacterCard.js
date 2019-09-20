import React from "react";

export default function CharacterCard(prop) {
  const {title, status, species, type, gender} = prop

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
