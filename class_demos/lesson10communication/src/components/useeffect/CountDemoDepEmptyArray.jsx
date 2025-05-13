import React, { useEffect, useState } from "react";

export default function Count() {
    let [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Effect function is called ');
    }, []);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+1</button> {count}
        </div>
    );

}
