import Pokemon from "../../src/Pokemon";
import {Chance} from 'chance';
import getPokemonIds from "../../src/idGenerator";

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
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await res.json();

    return {
        props: {
            pokemon
        }
    }
}