/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

export default class AverageWeight extends React.Component {
  render() {
    const { averageWeight: { value, measurementUnit } } = this.props;

    return (
      <p className="averageWeight">
        Average Weight:
        {' '}
        {value}
        {' '}
        {measurementUnit}
      </p>
    );
  }
}

AverageWeight.propTypes = {
  averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
  }).isRequired,
};
