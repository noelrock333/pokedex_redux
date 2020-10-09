import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchPokemon } from '../../redux/actions/pokemons';
import SearchBarComponent from './styles';

const SearchBar = ({ getPokemon }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (ev) => {
    ev.preventDefault();
    getPokemon(search);
  }

  const handleSearchClick = (ev) => {
    handleSearch(ev);
  };

  const handleFormSubmit = (ev) => {
    handleSearch(ev);
  };

  return (
    <SearchBarComponent>
      <h3>¡Busca tu pokemon!</h3>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={search} onChange={(ev) => setSearch(ev.target.value)} />
        <button onClick={handleSearchClick}>Buscar</button>
      </form>
    </SearchBarComponent>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = {
  getPokemon: fetchPokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
