export default function Bulbasaur({pokemon}: any) {
    return (
        <div>
            <h2>This was rendered with getStaticProps</h2>
            <p>Pokemon: {pokemon.name}</p>
            <p>Id: {pokemon.id}</p>
            <div>{Object.values(pokemon.sprites).filter(value => value !== null).filter((value) => typeof value === 'string').map((value: any, index: number, arr: any[]) => {
                console.log(`using image value ${JSON.stringify(value)}`);
                return (<img key={index} src={value}/>);
            })}</div>
            {/*{JSON.stringify(pokemon)}*/}
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