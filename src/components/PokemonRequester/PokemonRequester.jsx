/**
 * PokemonRequester — va chercher un Pokémon en direct sur la PokéAPI
 * (via pokemon.service.js) et affiche le résultat avec <Pokemon>.
 * Utilise Suspense (état de chargement) et ErrorBoundary (état d'erreur)
 * pour gérer le cycle asynchrone. En test, l'appel réseau est remplacé
 * par un mock MSW (voir mocks/pokemon.handlers.js) pour rester fiable
 * et rapide sans dépendre de la vraie API.
 */
import { ErrorBoundary } from "react-error-boundary";
import { fetchPokemon } from "../../services/pokemon.service";
import { Suspense, use } from "react";
import Pokemon from "../Pokemon/Pokemon";

export default function PokemonRequester({id}) {
    const pokemonPromise = fetchPokemon(id);

    return (
        <ErrorBoundary fallback={<p>Une erreur est survenu :o</p>}>
            <Suspense fallback={<p>Le pokemon arrive !</p>}>
                <PokemonRequesterInner promise={pokemonPromise} />
            </Suspense>
        </ErrorBoundary>
    )
}

function PokemonRequesterInner({promise}) {
    const pokemon = use(promise);
    return <Pokemon data={pokemon} />
}
