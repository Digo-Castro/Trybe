import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addAssignment from './actions';

class InputList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: '',
    };
  }

  render() {
    const { textValue } = this.state;
    const { add } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          onChange={(event) => this.setState({ textValue: event.target.value })}
        />
        <button type="button" onClick={() => add(textValue)}>
          Adicionar tarefa
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (value) => dispatch(addAssignment(value)),
});

export default connect(null, mapDispatchToProps)(InputList);

InputList.propTypes = {
  add: PropTypes.func.isRequired,
};
