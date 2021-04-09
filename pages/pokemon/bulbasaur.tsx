import Pokemon from '../../src/Pokemon';
import makeApiCall from '../../src/pokeApiService';
import { GetStaticProps } from 'next';

export default function Bulbasaur({ pokemon }: any) {
  return (
    <div>
      <h2>This was rendered with getStaticProps</h2>
      <Pokemon pokemon={pokemon} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await makeApiCall('bulbasaur');
  const pokemon = await res.json();

  return {
    props: {
      pokemon
    }
  };
};
