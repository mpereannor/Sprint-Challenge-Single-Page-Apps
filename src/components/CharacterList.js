import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios';


export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // const id = props.match.params.id
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    // const dependencyArray = 

    // Inspect the data you get back from the server. Get familiar with it. Set it to your state, pass that state to a component. Map over it

    axios
    .get(`https://rick-api.herokuapp.com/api/character`)
    .then(response => {
      setCharacters(response.data.results)
    })
    .catch(error =>{
      console.log(error);
    });
}, [characters]);


  return (
    <section className="character-list">
      <h2>
        {
          characters.map(ch => (
            < CharacterCard
            xname = {ch.name}
            xspecies = {ch.species}
            xgender ={ch.gender}
            />

          ))
        }
      </h2>
    </section>
  );
};
