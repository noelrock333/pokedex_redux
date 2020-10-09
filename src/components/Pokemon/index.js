import React from 'react';
import { connect } from 'react-redux';

import { addFavorites } from '../../redux/actions/pokemons';
import PokemonComponent from './styles';

const Pokemon = ({ pokemon, addToFavorites }) => {
  const { name, sprites, abilities } = pokemon;

  const handleAddFavorites = (ev) => {
    ev.preventDefault();
    addToFavorites(pokemon);
  };

  return (
    <PokemonComponent>
      <div className="display">
        <h4>{name}</h4>
        <div>
          <img src={sprites.front_default} alt="Foto del pokemon"/>
        </div>
        <ul>
          {abilities.map(item => <li key={item.ability.name}>{item.ability.name}</li>)}
        </ul>
        <button onClick={handleAddFavorites}>Agregar a favoritos</button>
      </div>
    </PokemonComponent>
  );
};

const mapStateToProps = ({ pokemons }) => {
  return {
    pokemon: pokemons.current,
  };
};

const mapDispatchToProps = {
  addToFavorites: addFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
