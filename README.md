# React + Vitest — Pokémon Requester Demo

A small demo site built during my QA Tester training (Bruxelles Formation / Cefora) to practice unit and integration testing of React components with **Vitest** and **React Testing Library**.

The application (React + Vite) combines several practice components:

- **Welcome** — simple display component (props)
- **Today** — displays today's date (`tools/date.tool.js`)
- **Counter** — counter with increment / decrement / reset
- **PokemonRequester** / **Pokemon** — fetches a Pokémon live from the public [PokéAPI](https://pokeapi.co) and displays it (name, types, stats, sprite), with loading and error handling through `Suspense` and `ErrorBoundary`

The most interesting part on the testing side: the `PokemonRequester` component is tested without relying on the network thanks to an API mock built with **MSW** (`mocks/pokemon.handlers.js` + JSON fixtures in `data/`), which makes it possible to test loading, success and error states reliably and reproducibly.

Goal: demonstrate a concrete application of the testing techniques learned during the training (API mocking, async components, error handling) on a richer project than my first exercises.
