import { act, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import PokemonRequester from "./PokemonRequester";

describe('PokemonRequester component', () => {

    test('show pokemon after request WebAPI', async () => {
        // Arrange
        const pokemonId = 100;

        // Act - Rendu asynchrone (Requete reseau)
        await act(() => {
            render(<PokemonRequester id={pokemonId} />);
        });

        // Asset
        expect(screen.getByText("Nom du Pokemon : voltorb")).toBeInTheDocument();
    });

    test('show loading message before request', async () => {
        render(<PokemonRequester id={100} />);
        expect(screen.getByText('Le pokemon arrive !')).toBeInTheDocument();
    }),

    test('error message on fail request', async () => {
        const pokemonId = -42;

        await act(() => {
            render(<PokemonRequester id={pokemonId} />)
        });

        expect(screen.getByText('Une erreur est survenu :o')).toBeInTheDocument();
    })
});