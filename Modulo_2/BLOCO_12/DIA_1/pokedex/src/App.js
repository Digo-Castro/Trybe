/* eslint-disable no-console */
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
        <footer><p>Módulo 2 - Bloco 12 - Dia 1</p></footer>
      </>
    );
  }
}

export default App;
