import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios';
import SearchForm from "./SearchForm";


export default function CharacterList(props) {
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [filtercharacters, setFilterCharacters] = useState([]);

  useEffect(() => {
   
    axios
    .get(`https://rickandmortyapi.com/api/character`)
    .then(response => {
      setCharacters(response.data.results)
    })
    .catch(error =>{
      console.log(error);
    });
  }, []);


const search = (e) => {
  setSearchName(e.target.value)
  let filtercharacters = [];

  filtercharacters = characters.filter(ch =>{
    return ch.name.includes(e.target.value)
  });

  setFilterCharacters(filtercharacters);
  
};

let characterToDisplay = characters;

if(searchName) {
  characterToDisplay = filtercharacters;

}

  return (
    <section className="character-list">
      <SearchForm onSearch={search} searchName ={searchName}/>
        {
          characterToDisplay.map(ch => {
            return (
              < CharacterCard
              ximage = {ch.image}
              xname = {ch.name}
              xspecies = {ch.species}
              xgender ={ch.gender}
              />
            )
          })
        }
    </section>
  );
};
