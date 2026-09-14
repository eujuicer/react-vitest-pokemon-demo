/**
 * Today — affiche la date du jour formatée en français (fr-BE).
 * Composant simple sans état, utile pour pratiquer le test
 * d'un rendu statique avec React Testing Library.
 */
import { getToday } from "../../tools/date.tool";

export default function Today() {
    const today = getToday();

    return (
        <p>Aujourd'hui nous sommes le {today.toLocaleDateString("fr-BE", { dateStyle: "full" })}</p>
    );
}
