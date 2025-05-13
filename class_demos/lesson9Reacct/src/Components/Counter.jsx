import { useReducer } from "react";
import reducer from '../util/reducer'

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            Count: {state}
            <br />
            <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>+5</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>-1</button>
            <button onClick={() => dispatch({ type: 'reset', payload: 0 })}>Reset</button>
        </div >
    )
}
