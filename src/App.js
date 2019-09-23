import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import  WelcomePage from "./components/WelcomePage";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import styled from 'styled-components';

const WholeSytle = styled.main`
  background-image: url('head-god.jpg');
`

export default function App() {
 
  return (
      <WholeSytle>
        <Header />
        <Route exact path='/' component={WelcomePage}/>
        <Route exact path='/' component={CharacterList}/>
      </WholeSytle>
  );
}

