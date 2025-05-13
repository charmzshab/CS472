
import { useState } from "react"
import Child from "./Child"

export default function Parent() {
    let [data, setData] = useState(0);
    const getData = (c) => { setData(c) }

    return (
        <div style={{ border: "1px solid blue", margin: "10px", padding: "10px" }}>
            It is a Parent. Count:{data}
            <Child onGetData={getData} />
        </div>
    )
}
