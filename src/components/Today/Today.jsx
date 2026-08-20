import { getToday } from "../../tools/date.tool";

export default function Today() {
    const today = getToday();

    return (
        <p>Aujourdhui nous sommes le {today.toLocaleDateString("fr-BE", { dateStyle: "short" })}</p>
    );
}
