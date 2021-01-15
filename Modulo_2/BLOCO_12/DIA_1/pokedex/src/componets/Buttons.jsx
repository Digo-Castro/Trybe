/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

export default class Buttons extends React.Component {
  render() {
    const { pokemonType } = this.props;

    return (
      <button type="button" className="filter-btn">{pokemonType}</button>
    );
  }
}

Buttons.propTypes = ({ pokemonType: PropTypes.string }).isRequired;
