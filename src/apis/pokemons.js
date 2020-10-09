import axios from 'axios';

const { REACT_APP_POKEMON_API } = process.env;

export const getPokemons = async () => {
  try {
    const path = REACT_APP_POKEMON_API;

    const response = await axios.get({
      url: path,
      method: 'get',
    });
  
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getPokemon = async (name) => {
  try {
    const path = `${REACT_APP_POKEMON_API}/pokemon/${name.toLowerCase()}`;

    const response = await axios({
      method: 'get',
      url: path,
    });

    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
