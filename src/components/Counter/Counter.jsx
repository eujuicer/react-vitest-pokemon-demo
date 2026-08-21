import { useState } from "react";

export default function Counter({ step = 1 }) {

    // Variable "d'état" que React connais 
    // - Conserver la valeur
    // - Dès que la valeur change → Update du visuel
    const [count, setCount] = useState(0);

    const handleIncr = () => {
        // Modification de valeur : Evolution
        setCount(count => count + step);
    };

    const handleReset = () => {
        // Modification de valeur : Changement
        setCount(0)
    }

    return (
        <>
            <p>{count}</p>
            <div>
                <button onClick={handleIncr}>+ {step}</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </>
    );
}