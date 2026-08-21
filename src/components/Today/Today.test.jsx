import { render, screen } from "@testing-library/react";
import { describe, expect, vi } from "vitest";
import Today from "./Today";

// ↓ Importé la méthode utilisé par le composant qui doit être remplacé
import { getToday } from "../../tools/date.tool";

// ↓ Mock le module avec le "vi.mock"
vi.mock("../../tools/date.tool")

describe('Today Component', () => {

    test('Display date on belgium nationnal day', () => {
        // Setup : Config pour le mock de la méthode
        getToday.mockReturnValue(new Date(2026, 6, 21));
        
        // Arrange
        render(<Today />);
        const elem = screen.getByRole('paragraph');

        // Assets
        expect(elem).toHaveTextContent('mardi 21 juillet 2026');
        expect(getToday).toHaveBeenCalledOnce();
    });

});