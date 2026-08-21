import { render, screen } from "@testing-library/react";
// import { describe, expect, test } from "vitest";
import Welcome from "./Welcome";

describe('Welcome', () => {

    test('displays welcome message' , () => {
        // Arrange 
        const firstname = 'July'
        const lastname = 'Flora'
        const messageWelcome = 'Bienvenue July Flora !';
        //RENDU DU COMPOSANT A TESTER
        render(<Welcome firstname={firstname} lastname={lastname} />)
        //ACT //AUCUN COMPORTEMENT POUR CE TEST 
        screen.debug(screen.getByRole('heading'))
        //ASSERT
        expect(screen.getByText(messageWelcome)).toBeInTheDocument();
    });

    test('have a heading level 1 and content "Bienvenue"',()=> {
        //ARRANGE
        render(<Welcome firstname='Jack' lastname='Sparrow'/>);
        //ACT
        const title = screen.getByRole('heading',{ level : 1 });
        //ASSET
        expect(title).toHaveTextContent('Bienvenue');
    });

    test('have a heading level 1 and check content by regex',() => {
        //ARRANGE
        render(<Welcome firstname='Jack' lastname='Sparrow'/>);
        //ACT
        const title = screen.getByRole('heading',{ level : 1 });
        //ASSET
        expect(title).toHaveTextContent(/Bienvenue [a-z]+ [a-z]+ !/i);
    })
    
}); 