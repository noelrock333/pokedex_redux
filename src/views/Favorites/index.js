import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { removePokemon } from '../../redux/actions/pokemons';
import FavoritesComponent from './styles';
import Header from '../../components/Header';

const Favorites = ({ favorites, remove }) => {
  return (
    <FavoritesComponent>
      <Header title="Mis favoritos" />
      <section>
        <ul>
          {favorites.map(item => <li key={item.id}>{item.name} <button onClick={() => remove(item.id)}>Eliminar</button></li>)}
        </ul>
      </section>
      <Link to="/">Volver a la busqueda</Link>
    </FavoritesComponent>
  );
};

const mapStateToProps = ({ pokemons }) => {
  return {
    favorites: pokemons.favorites,
  }
};

const mapDispatchToProps = {
  remove: removePokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
