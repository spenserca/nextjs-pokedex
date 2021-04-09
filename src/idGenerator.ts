export default async function getPokemonIds() {
    const ids = [];
    for (let i = 1; i <= 151; i++) {
        ids.push(i);
    }

    return Promise.resolve(ids);
}