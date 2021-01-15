/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

import PokeCard from './PokeCard';

export default class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      btnTypeFilterValue: '',
    };
  }

  handleClick = (event) => {
    if (event.target.value === 'Limpar') {
      this.setState({ btnTypeFilterValue: '' });
    } else {
      this.setState({ btnTypeFilterValue: event.target.value });
    }
  }

  render() {
    const { btnTypeFilterValue } = this.state;
    const { pokemons } = this.props;

    return (
      <>
        <section className="filter-bar">
          <p>Filtros: </p>
          {pokemons.map((pokemon) => pokemon.type)
            .reduce((acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]), [])
            .map((type) => <input type="button" className="filter-btn" key={type} onClick={this.handleClick} value={type} />)}
        </section>
        <div>
          <input type="button" className="clear-btn" onClick={this.handleClick} value="Limpar" />
        </div>
        <div className="pokedex">
          {pokemons
            .filter((pokemon) => pokemon.type.includes(btnTypeFilterValue))
            .map((pokemon) => <PokeCard pokemon={pokemon} key={pokemon.id} />)}
        </div>
      </>
    );
  }
}

Pokedex.propTypes = ({
  pokemons: PropTypes.arrayOf(PropTypes.object),
  typeFilter: PropTypes.string,
}).isRequired;
