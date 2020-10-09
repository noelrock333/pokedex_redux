import { getPokemon } from 'apis/pokemons';
import * as types from './types';

export const setPokemon = (text) => {
  return {
    type: types.SET_POKEMON,
    payload: text
  }
};

export const addFavorites = (pokemon) => {
  return {
    type: types.ADD_POKEMON,
    payload: pokemon,
  }
};

export const removePokemon = (id) => {
  return {
    type: types.REMOVE_POKEMON,
    payload: id,
  }
};

export const fetchPokemon = (name) => async (dispatch) => {
  try {
    const response = await getPokemon(name);
    dispatch({
      type: types.SET_POKEMON,
      payload: response
    });
  } catch (err) {
    dispatch({
      type: types.SET_POKEMON,
      payload: null
    });
  }
}; 
