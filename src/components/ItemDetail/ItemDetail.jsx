import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useCart } from "../../hooks/useCart";
import { useNotification } from "../../context/NotificationContext";

export default function ItemDetail({id, name, img, description, category, price, stock}) {
  const {addItem, isInCart} = useCart()
  const {setNotification} = useNotification()
  
  const handleAdd = (count) => {
    const productToAdd = {
      id, name, price, quantity: count
    }
    addItem(productToAdd)
    setNotification("success", `Se agregó ${count} de ${name}`);
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
                <p>Precio: ¢ {price}</p>
                <p>Disponible: {stock}</p>
            </div>

        {
          isInCart(id) ? (
          <Link to="/cart">Finalizar compra</Link>
        ) : (
          <ItemCount stock={stock} onAdd={handleAdd} />
        )}
        </div>
    </div>
  );
}