import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SearchBar from '../../components/SearchBar';
import Header from '../../components/Header';
import Pokemon from '../../components/Pokemon';
import HomeComponent from './styles';

const Home = ({ currentPokemon }) => {
  return (
    <HomeComponent>
      <Header />
      <section>
        <SearchBar />
        {currentPokemon && <Pokemon />}
      </section>
      <Link to="/favorites">Ver favoritos</Link>
    </HomeComponent>
  );
};

const mapStateToProps = ({ pokemons }) => {
  return {
    currentPokemon: pokemons.current,
  }
};

export default connect(mapStateToProps)(Home);
