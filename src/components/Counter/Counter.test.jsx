import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe('Composant Counter', () => {

    test('Display initial state', () => {
        // Arrange
        render(<Counter />);

        // Act
        const elem = screen.getByRole('paragraph');
        const btns = screen.getAllByRole('button');

        // Assert
        expect(elem).toHaveTextContent('0');
        expect(btns).toHaveLength(2);
    });

    test('Increment by 1 : One click', async () => {
        const user = userEvent.setup();

        // Arrange
        render(<Counter />);
        const elem = screen.getByRole('paragraph');
        const btn = screen.getByRole('button', { name: "+ 1" });

        // Act
        await user.click(btn);

        // Assert
        expect(elem).toHaveTextContent('1');
    });

    test('Increment by 1 : Triple click', async () => {
        const user = userEvent.setup();

        // Arrange
        render(<Counter />);
        const elem = screen.getByRole('paragraph');
        const btn = screen.getByRole('button', { name: "+ 1" });

        // Act
        await user.tripleClick(btn);

        // Assert
        expect(elem).toHaveTextContent('3');
    });

    test('Increment by 5 : One click', async () => {
        const user = userEvent.setup();

        // Arrange
        render(<Counter step={5} />);
        const elem = screen.getByRole('paragraph');
        const btn = screen.getByRole('button', { name: "+ 5" });

        // Act
        await user.click(btn);

        // Assert
        expect(elem).toHaveTextContent('5');

    });

    test('Reset after increment', async () => {
        //SETUP
        const user = userEvent.setup();

       //ARRANGE
        render(<Counter />);
        const elem = screen.getByRole('paragraph');
        const incrementbtn = screen.getByRole('button', { name: "+ 1" });
        const resetbtn = screen.getByRole('button', { name: "Reset" });
        await user.click(incrementbtn)

        // Act
        await user.click(resetbtn)

        // Assert
        expect(elem).toHaveTextContent('0');
        
    })
});