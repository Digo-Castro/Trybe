/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import Logo from '../image/pokedex_logo.png';
import Pokeball from '../image/pokeball.png';

export default class Header extends React.Component {
  render() {
    return (
      <>
        <img src={Logo} alt="Logo" className="logo" />
        <img src={Pokeball} alt="Pokeball" className="pokeball" />
      </>
    );
  }
}
