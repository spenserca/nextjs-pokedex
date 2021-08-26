export default function Pokemon({pokemon}: any) {
    return (
        <div>
            <p>Pokemon: {pokemon.name.toUpperCase()}</p>
            <p>Id: {pokemon.id}</p>
            <div>{Object.values(pokemon.sprites).filter(value => value !== null).filter((value) => typeof value === 'string').map((value: any, index: number, arr: any[]) => {
                return (<img key={index} src={value}/>);
            })}</div>
        </div>
    )
}