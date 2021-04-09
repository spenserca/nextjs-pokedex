import Pokemon from "../../src/Pokemon";
import {Chance} from 'chance';
import getPokemonIds from "../../src/idGenerator";
import makeApiCall from "../../src/pokeApiService";

export default function Random({pokemon}: any) {
    return (
        <div>
            <h2>This was rendered with getServerSideProps</h2>
            <Pokemon pokemon={pokemon}/>
        </div>
    )
}

export async function getServerSideProps() {
    const chance = new Chance();
    const ids = await getPokemonIds();
    const id = chance.pickone(ids);
    const res = await makeApiCall(id);
    const pokemon = await res.json();

    return {
        props: {
            pokemon
        }
    }
}