import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addFavorites } from "../../redux/actions/pokemons";
import PokedexComponent, {
  PokedexHeader,
  PokedexNavigationButtons,
  PokedexOptionsButtons,
  PokedexStats,
  PokedexScreen
} from "./styles";

function mapPokemonStats(pokemon) {
  if (!Object.keys(pokemon).length) return {};

  const stats = pokemon.stats.reduce((newStats, currentStat) => {
    return {
      ...newStats,
      [currentStat.stat.name]: currentStat.base_stat
    };
  }, {});
  return {
    name: pokemon.name,
    type: pokemon.types[0].type.name,
    ...stats
  };
}

function Pokedex(props) {
  const { pokemon, addToFavorites } = props;
  const { name, sprites = {} } = pokemon;

  const handleAddFavorites = ev => {
    ev.preventDefault();
    addToFavorites(pokemon);
  };

  return (
    <PokedexComponent>
      <Link to="/favorites">Ver favoritos</Link>
      <div id="pokedex">
        <div id="left">
          <PokedexHeader />
          <PokedexScreen img={sprites.front_default} name={name} />
          <PokedexNavigationButtons />
        </div>
        <div id="right">
          <PokedexStats stats={mapPokemonStats(pokemon)} />
          <PokedexOptionsButtons
            addToFavorites={handleAddFavorites}
            enabled={Object.keys(pokemon).length}
          />
        </div>
      </div>
    </PokedexComponent>
  );
}

const mapStateToProps = ({ pokemons }) => {
  return {
    pokemon: pokemons.current
  };
};

const mapDispatchToProps = {
  addToFavorites: addFavorites
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
