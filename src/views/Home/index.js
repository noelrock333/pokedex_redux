import React from "react";
import { connect } from "react-redux";
import SearchBar from "../../components/SearchBar";
import Header from "../../components/Header";
import HomeComponent from "./styles";
import Pokedex from "../../components/Pokedex";

const Home = ({ currentPokemon }) => {
  return (
    <HomeComponent>
      <Header />
      <section>
        <SearchBar />
        <Pokedex />
      </section>
    </HomeComponent>
  );
};

const mapStateToProps = ({ pokemons }) => {
  return {
    currentPokemon: pokemons.current,
  }
};

export default connect(mapStateToProps)(Home);
