import React from 'react';

import HeaderComponent from './styles';

const Header = ({ title = 'Pokedex app' }) => {
  return (
    <HeaderComponent>
      <h1>{title}</h1>
    </HeaderComponent>
  );
};

export default Header;
