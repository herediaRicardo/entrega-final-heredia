import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMocks";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"

export default function ItemListContainer(){

    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    useEffect(()=>{    
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        asyncFunction(categoryId)
          .then(data => setProducts(data))
  }, [categoryId])

    return(
        <div>
            <h1>Bienvenidos a la tienda del emporio y explosivos de Masse Goskey.</h1>
            <ItemList products={products} />
        </div>
       )
}

