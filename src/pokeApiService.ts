type PokemonNameOrId = number | string;

export default function makeApiCall(pokemonNameOrId: PokemonNameOrId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`);
}
