/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import './App.css';

import Pokedex from './componets/Pokedex';
import pokemons from './data';
import Header from './componets/Header';

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <div className="pokedex-container">
            <Pokedex pokemons={pokemons} />
          </div>
        </main>
        <footer><spam>Módulo 2 - Bloco 11 - Dia 2</spam></footer>
      </>
    );
  }
}

export default App;
