/**
 * Setup global des tests Vitest.
 * Démarre un faux serveur HTTP (MSW) qui intercepte les appels
 * à la PokéAPI pendant les tests, pour qu'aucun test ne dépende
 * du réseau réel : rapide, fiable, reproductible.
 */
import '@testing-library/jest-dom/vitest';
import { setupServer } from 'msw/node';
import pokemonHandlers from '../mocks/pokemon.handlers';
import { afterAll, afterEach, beforeAll } from 'vitest';

// Serveur de mock via MSW
export const server = setupServer(...pokemonHandlers);

// Lancement automatique du serveur lors des tests
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
