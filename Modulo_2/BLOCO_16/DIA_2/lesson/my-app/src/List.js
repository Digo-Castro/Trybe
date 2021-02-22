/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class List extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        <div>
          {list.map((element) => (
            <p>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ list: state.listReducer });

export default connect(mapStateToProps)(List);

List.propTypes = { list: PropTypes.arrayOf(PropTypes.string).isRequired };
