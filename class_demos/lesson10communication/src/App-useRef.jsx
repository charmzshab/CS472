import { useRef } from "react";
export default function App() {
    const header = useRef(null);
    console.log(header);
    const changeText = () => header.current ? header.current.innerHTML = "Bonjour" : "";

    return (
        <div>
            <h1 ref={header}>Hello</h1>
            <button onClick={changeText}>Translate to French</button>
        </div>
    );
}
