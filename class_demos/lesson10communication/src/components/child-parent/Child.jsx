import React, { useState } from 'react'

export default function Child(props) {
    let [count, setCount] = useState(0);

    const inc = () => {
        setCount(count + 1);
        props.onGetData(count + 1);
    }
    const dec = () => {
        setCount(prev => prev - 1);
        props.onGetData(count - 1);
    }

    return (
        <div style={{ border: "1px solid blue", margin: "10px", padding: "10px" }}>
            It is a child.
            <button onClick={inc} style={{ margin: "5px" }}>+1</button>
            {count}
            <button onClick={dec} style={{ margin: "5px" }}>-1</button>
        </div>
    )
}
