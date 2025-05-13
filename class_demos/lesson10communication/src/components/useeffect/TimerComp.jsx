import React, { useEffect, useState } from "react"

export default function TimerComp() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            console.log(`Interval running for count:${count}, index:${++index}`);
        }, 1000);

        console.log(`Effect is running for interval id: ${interval}, count: ${count} `);

        return () => {
            console.log(`Cleaning up for interval: ${interval}, count:`, count);
            clearInterval(interval); // Clear previous interval
        };
    }, [count]);

    return (
        <div>
            <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
            {/* <p>Count: {count}</p> */}
        </div>
    );
};