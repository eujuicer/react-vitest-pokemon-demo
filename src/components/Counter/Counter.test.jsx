import { describe, test, expect } from "vitest";
import Counter from "./Counter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


describe('Composant counter' , () => {
    test('Display initial state', () => {
        //ARRANGE
        render(<Counter/>) 

        //ACT 
        const elem = screen.getByRole('paragraph');
        const btns = screen.getAllByRole('button');
        
        //ASSERT
        expect(elem).toHaveTextContent('0');
        expect(btns).toHaveLength(2);

    });
    test('Increment +1', async () => {
        const user = userEvent.setup();

        // Arrrange
        render(<Counter />);
        const elem = screen.getByRole('paragraph');
        const button = screen.getByRole('button', { name: "+ 1" });

        // Act
        await user.click(button);

        //Assert
        expect(elem).toHaveTextContent('1');
    });

    test('Increment +1 : by 3 click', async () => {
        const user = userEvent.setup();

        // Arrrange
        render(<Counter />);
        const elem = screen.getByRole('paragraph');
        const button = screen.getByRole('button', { name: "+ 1" });

        // Act
        await user.tripleClick(button);

        //Assert
        expect(elem).toHaveTextContent('3');
    });

  test('Increment +5 : by 1 click', async () => {
        const user = userEvent.setup();

        // Arrrange
        render(<Counter step= {5} />);
        const elem = screen.getByRole('paragraph');
        const button = screen.getByRole('button', { name: "+ 5" });

        // Act
        await user.click(button);

        //Assert
        expect(elem).toHaveTextContent('5');
    });


    test('Reset after increment', async () => {
        const user = userEvent.setup();

        render(<Counter />);
        const elem = screen.getByRole('paragraph');
        const incrBtn = screen.getByRole('button', {name: '+ 1'});
        const resetBtn = screen.getByRole('button', {name: 'Reset'});
        await user.tripleClick(incrBtn);

        await user.click(resetBtn);

        expect(elem).toHaveTextContent('0');
    });

});


