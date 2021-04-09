import Pokemon from "../../src/Pokemon";
import getPokemonIds from "../../src/idGenerator";
import makeApiCall from "../../src/pokeApiService";

export default function DynamicPokemon({pokemon}: any) {
    return (
        <div>
            <h2>This was rendered with getStaticPaths + getStaticProps (dynamic routing)</h2>
            <Pokemon pokemon={pokemon}/>
        </div>
    )
}

export async function getStaticProps({params}: any) {
    const res = await makeApiCall(params.id);
    const pokemon = await res.json();

    return {
        props: {
            pokemon
        }
    }
}

export async function getStaticPaths() {
    const pokemonIds = await getPokemonIds();

    const paths = pokemonIds.map((pokemonId) => ({
        params: {
            id: pokemonId.toString()
        }
    }));

    return {
        paths, fallback: false
    }
}