import Pokemon from "../../src/Pokemon";
import getPokemonIds from "../../src/idGenerator";

export default function DynamicPokemon({pokemon}: any) {
    return (
        <div>
            <h2>This was rendered with getStaticPaths + getStaticProps (dynamic routing)</h2>
            <Pokemon pokemon={pokemon}/>
        </div>
    )
}

export async function getStaticProps({params}: any) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
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