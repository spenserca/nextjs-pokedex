import Pokemon from "../../src/Pokemon";
import {Chance} from 'chance';

export default function Charmander({pokemon}: any) {
    return (
        <div>
            <h2>This was rendered with getServerSideProps</h2>
            <Pokemon pokemon={pokemon}/>
        </div>
    )
}

export async function getServerSideProps() {
    const chance = new Chance();
    const id = chance.pickone([4, 5, 6]);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await res.json();

    return {
        props: {
            pokemon
        }
    }
}