import {
  SET_POKEMON,
  ADD_POKEMON,
  REMOVE_POKEMON,
} from '../actions/pokemons/types';

const initialState = {
  current: null,
  list: [],
  favorites: [],
};

function reducer(currentState = initialState, { type, payload }) {
  switch(type) {
    case SET_POKEMON: {
      return {
        ...currentState,
        current: payload
      }
    }
    case ADD_POKEMON: {
      return {
        ...currentState,
        favorites: [...currentState.favorites, payload]
      }
    }
    case REMOVE_POKEMON: {
      return {
        ...currentState,
        favorites: currentState.favorites.filter(item => item.id !== payload),
      }
    }
    default: {
      return currentState;
    } 
  }
}

export default reducer;
