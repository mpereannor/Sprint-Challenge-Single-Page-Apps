import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import  WelcomePage from "./components/WelcomePage";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SearchForm from "./components/SearchForm.js";

export default function App() {
  return (
    <Router>
      <main>
        <Header />
        <Route exact path='/' component={WelcomePage}/>
        <Route exact path='/characters' component={CharacterList}/>
        <SearchForm/>
      </main>
    </Router>
  );
}

