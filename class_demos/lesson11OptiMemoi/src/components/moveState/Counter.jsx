
import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    console.log('Counter ..................');


    const increment = () => {
        setCount((c) => c + 1);
    };
    return (
        <div>
            Count: {count}
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter;