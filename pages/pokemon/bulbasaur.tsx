import Pokemon from "../../src/Pokemon";

export default function Bulbasaur({pokemon}: any) {
    return (
        <div>
            <h2>This was rendered with getStaticProps</h2>
            <Pokemon pokemon={pokemon} />
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
    const pokemon = await res.json();

    return {
        props: {
            pokemon
        }
    }
}