# React + Vitest — Démo Pokemon Requester

Petit site de démo réalisé pendant ma formation Testeur QA (Bruxelles Formation / Cefora), pour pratiquer les tests unitaires et d'intégration React avec **Vitest** et **React Testing Library**.

L'application (React + Vite) combine plusieurs composants d'entraînement :

- **Welcome** — composant d'affichage simple (props)
- **Today** — affichage de la date du jour (`tools/date.tool.js`)
- **Counter** — compteur avec incrément / décrément / reset
- **PokemonRequester** / **Pokemon** — va chercher un Pokémon en direct sur la [PokéAPI](https://pokeapi.co) publique et l'affiche (nom, types, stats, sprite), avec gestion du chargement et des erreurs via `Suspense` et `ErrorBoundary`

Le point le plus intéressant côté tests : le composant `PokemonRequester` est testé sans dépendre du réseau grâce à un mock de l'API avec **MSW** (`mocks/pokemon.handlers.js` + fixtures JSON dans `data/`), ce qui permet de tester le chargement, le succès et l'erreur de façon fiable et reproductible.

Objectif : démontrer une application concrète des techniques de test vues en formation (mock d'API, composants asynchrones, gestion d'erreurs) sur un projet plus riche que mes premiers exercices.
