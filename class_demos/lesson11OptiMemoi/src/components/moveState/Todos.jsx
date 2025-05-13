import { useState } from "react";

function Todos() {
    const [todos, setTodos] = useState(["todo 1", "todo 2", "todo 3"]);
    console.log("Todos render........");
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
        </>
    );
};

export default Todos;
