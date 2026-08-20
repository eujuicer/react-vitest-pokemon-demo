import { getToday } from "../../tools/date.tool"

export default function Today() {

    const today = getToday();
    
    return (
        <p>{today.toLocaleDateString('fr-be', { dateStyle: 'full' })}</p>
    )
}