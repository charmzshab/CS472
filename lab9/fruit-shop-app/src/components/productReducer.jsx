import { useReducer } from "react";
import { reducer } from "./reducer";

const ProductReducer = (props) =>{
    const {name, price, inStock} = props;
    const [state, dispatch] = useReducer(reducer,inStock);

    return (
        <>        
        <div>
          <h3 style={{color: state ? 'green' : 'red'}}>{name}</h3>
         <p>{price}</p>
         <p>{state?"True":"False"}</p>
         <button onClick={()=>dispatch({type: 'TOGGLE', payload: state})}>
            {state?"True":"False"}
         </button>
        </div>
        </>
)
}

export default  ProductReducer;