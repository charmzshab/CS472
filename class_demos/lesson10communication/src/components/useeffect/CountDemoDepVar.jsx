import React, { useEffect, useState } from "react"

export default function Count() {
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        console.log('Effect function is called ' + msg);
    }, [msg]);

    return (
        <div>
            this is app
            <button onClick={() => setCount(count + 1)}>+1</button>{count}
            <button onClick={() => setMsg(msg + 'hi')}>Message</button>
        </div>
    );
}
