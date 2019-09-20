import React, {useState} from "react";
import Header from "./components/Header.js";
import CharacterCard from "./components/CharacterCard";
import CharacterList from "./components/CharacterList";


export default function App() {
  // const [character, characterList] = useState({});
  return (
    <main>
      <Header />
      <CharacterList/>
    </main>
  );
}
