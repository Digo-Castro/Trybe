/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import InputList from './InputList';
import List from './List';

class App extends React.Component {
  render() {
    return (
      <div>
        <InputList />
        <List />
      </div>
    );
  }
}

export default App;
