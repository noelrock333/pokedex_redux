import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import pokemonsReducer from './reducers/pokemonsReducer';

const rootReducer = combineReducers({
  pokemons: pokemonsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
