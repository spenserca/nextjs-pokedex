import Pokemon from "../../src/Pokemon";
import makeApiCall from "../../src/pokeApiService";

export default function Bulbasaur({pokemon}: any) {
    return (
        <div>
            <h2>This was rendered with getStaticProps</h2>
            <Pokemon pokemon={pokemon}/>
        </div>
    )
}

export async function getStaticProps() {
    const res = await makeApiCall('bulbasaur');
    const pokemon = await res.json();

    return {
        props: {
            pokemon
        }
    }
}