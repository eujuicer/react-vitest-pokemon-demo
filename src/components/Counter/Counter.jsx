import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);

    const handleIncr = () => {
        setCount(count => count + 1); 
    };

    const handleReset = () => {
        setCount(0)
    }

    return (
        <>
            <p>{count}</p>
            <div>
                <button onClick={handleIncr}>+ 1</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </>
    );
}