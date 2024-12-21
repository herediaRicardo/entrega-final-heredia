import { useCart } from "../../hooks/useCart"
import "./cartItem.css";


function CartItem({id, name, img, quantity, price}) {
    console.log(name)
    const {removeItem} = useCart()
    const handleRemove = (id) => {
        removeItem(id)
    }
  return (
    <div className="container-cartItem">        
            <article>           
            
            <div className="img-card-item">
            <img 
                src={img}
                className="card-img-top-detail"
                alt={name}
            />
            </div>   

            <div className="container-detalle-cart-item">
               <h2>{name}</h2>
               <p>Cantidad: {quantity}</p>
               <p>Precio x unidad: ¢{price}</p>
               <p>TSubtotal: ¢ {price * quantity}</p>
            </div>

            <button className="remove-item" onClick={() => handleRemove(id)}></button>  

            </article>            

        <section className="detalle-total">
        </section>
    </div>
  )
}

export default CartItem
