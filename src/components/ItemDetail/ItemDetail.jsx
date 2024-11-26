//import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

export default function ItemDetail({id, name, img, description, category, price, stock}) {
  const handleAdd = (cantidad) => {
    const objectToAdd = {
      id, name, price, cantidad
    }
    console.log(objectToAdd)
  }
  return (
    <div className="container-detail">
        <h1>{name}</h1>
        <div className="card-detail">
            <img 
                src={img}
                className="card-img-top-detail"
                alt={name}
            />

            <div className="card-body">
                <p>{description}</p>
                <p>Category: {category}</p>
                <p>Precio: $ {price}</p>
                <p>Disponible: {stock}</p>
            </div>
            <ItemCount className="count-detail" stock={stock} onAdd={handleAdd}/>
            {/* <Link to="/cart" >Finalizar compra</Link> */}
        </div>
    </div>
  )
}