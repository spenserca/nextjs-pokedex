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
    console.log(`calling pokemon api for bulbasaur @ ${new Date().toISOString()}`);
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
    const pokemon = await res.json();

    return {
        props: {
            pokemon
        }
    }
}