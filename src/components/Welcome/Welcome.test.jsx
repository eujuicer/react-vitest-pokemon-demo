import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Welcome from "./Welcome";

describe('Composant Welcome', () => {

    test('display welcome message', () => {
        // Arrange
        // - Variable
        const firstname = 'July';
        const lastname = 'Flora';
        const messageWelcome = 'Bienvenue July Flora !';
        // - Rendu du composant a tester
        render(<Welcome firstname={firstname} lastname={lastname} />)

        // Act
        // - Aucun comportement pour ce test

        // Assert
        expect(screen.getByText(messageWelcome)).toBeInTheDocument();
    });

    /*
    test('debug welcome message', () => {
        // Arrange
        render(<Welcome firstname='Della' lastname='Duck' />)

        // Debug du screen
        screen.debug(screen.getByRole('heading', { level: 1 }));
    });
    */

    test('have a heading level 1 and content "Bienvenue"', () => {
        // Arrange
        render(<Welcome firstname='Jack' lastname='Sparrow' />);

        // Act
        const title = screen.getByRole('heading', { level : 1 });

        // Asset
        expect(title).toHaveTextContent('Bienvenue');
    });
    
    test('have a heading level 1 and check content by regex', () => {
        // Arrange
        render(<Welcome firstname='Jack' lastname='Sparrow' />);

        // Act
        const title = screen.getByRole('heading', { level : 1 });

        // Asset
        expect(title).toHaveTextContent(/Bienvenue [a-z]+ [a-z]+ !/i);
    });
});