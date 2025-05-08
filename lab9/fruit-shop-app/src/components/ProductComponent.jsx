import { useState } from "react"

export const ProductComponent = ({name,price,inStock})=>{

    const [status,setState] = useState(inStock);

    return (
        <div>
          <h3 style={{color:status?"green":"red"}}>{name}</h3>
         <p>{price}</p>
         <p>{status?"True":"False"}</p>
         <button onClick={()=>setState(!status)}>
            {status?"True":"False"}
         </button>
        </div>
    )
}