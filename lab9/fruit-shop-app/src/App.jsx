import { useState } from 'react'
import './App.css'
import { data } from './data/data'
import { ProductListComponent } from './components/ProductListComponent'

export const App = ()=>{
  const[productList,setProductList] = useState(data)

  return <ProductListComponent products={productList}/>
}

export default App
