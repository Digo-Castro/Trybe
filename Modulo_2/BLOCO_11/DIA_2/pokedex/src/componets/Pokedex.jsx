/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

import PokeCard from './PokeCard';

export default class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;

    return (
      <div className="pokedex">
        {pokemons.map((pokemon) => <PokeCard pokemon={pokemon} key={pokemon.id} />)}
      </div>
    );
  }
}

Pokedex.propTypes = { pokemons: PropTypes.arrayOf(PropTypes.object).isRequired };
