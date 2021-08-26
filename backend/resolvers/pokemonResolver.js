const fetch = require('node-fetch');

async function fetchPokemon(pokemonId) {
  console.log(`Fetching pokemon with id ${pokemonId}`);
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

  return await response.json();
}

module.exports = {
  fetchPokemon
}