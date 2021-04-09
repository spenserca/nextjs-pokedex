import Pokemon from '../../src/Pokemon';
import getPokemonIds from '../../src/idGenerator';
import makeApiCall from '../../src/pokeApiService';
import { GetStaticPaths, GetStaticProps } from 'next';

export default function DynamicPokemon({ pokemon }: any) {
  return (
    <div>
      <h2>
        This was rendered with getStaticPaths + getStaticProps (dynamic routing)
      </h2>
      <Pokemon pokemon={pokemon} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const res = await makeApiCall(params.id);
  const pokemon = await res.json();

  return {
    props: {
      pokemon
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemonIds = await getPokemonIds();

  const paths = pokemonIds.map((pokemonId) => ({
    params: {
      id: pokemonId.toString()
    }
  }));

  return {
    paths,
    fallback: false
  };
};
