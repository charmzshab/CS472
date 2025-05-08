import { ProductComponent } from "./ProductComponent"
import ProductReducer from "./productReducer"

export const ProductListComponent = ({products})=>{

    return(<>
        <h1>Product List using useState</h1>
        {products.map((product,index)=><ProductComponent {...product} key={index}/>)}
        <h1>Product List using useReduce</h1>
        {products.map((product,index)=><ProductReducer {...product} key={index}/>)}



    </>

    )
    
}