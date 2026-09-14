/**
 * Service d'accès à la PokéAPI (https://pokeapi.co).
 * Isolé dans son propre fichier pour pouvoir être mocké facilement
 * en test (voir mocks/pokemon.handlers.js) sans dépendre du réseau réel.
 */
export async function fetchPokemon(pokeId) {
    // Récupération des données depuis la WebAPI
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;
    const data = await fetch(url).then(res => res.json());

    // Renvoyer les données
    return {
        name: data.name,
        types: data.types.map(elem => elem.type.name),
        stats: data.stats.map(elem => ({
            name: elem.stat.name,
            value : elem.base_stat
        })),
        sprites : data.sprites.front_default
    }
}
