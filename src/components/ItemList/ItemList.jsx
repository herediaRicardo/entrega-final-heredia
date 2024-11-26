import Item from "../Item/Item"
import "./ItemList.css"

export default function ItemList({products}) {
  return (
    <div className="container">
        {products.map(product => <Item key={product.id} product={product} />)}
    </div>
  )
}