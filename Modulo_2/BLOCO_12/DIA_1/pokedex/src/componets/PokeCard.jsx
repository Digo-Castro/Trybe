/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import AverageWeight from './AverageWeight';

export default class PokeCard extends React.Component {
  render() {
    const {
      pokemon:
        {
          name, type, averageWeight, image,
        },
    } = this.props;

    return (
      <div className="poke-card">
        <img src={image} alt="Pokemon" className="poke-img" />
        <div>
          <h3>{name}</h3>
          <h4 className="type">{type}</h4>
        </div>
        <div>
          <AverageWeight averageWeight={averageWeight} />
        </div>
      </div>
    );
  }
}

PokeCard.propTypes = {
  pokemon: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({ value: PropTypes.number, measurementUnit: PropTypes.string }),
  }).isRequired,
};
