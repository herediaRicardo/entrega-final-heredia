import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import CartItem from "../CartItem/CartItem";
import "./cart.css";


function Cart() {
  const { cart, clearCart, getTotal, totalQuantity } = useCart();
  
  const total = getTotal()
  
  if(totalQuantity === 0){
    return <h1>No hay items en el carrito</h1>
  }

  
  return (
    
    <div className="body-cart">
    <div className="cart">
      <section className="detalle-productos">
      <h1>Tu Carrito</h1>
      {cart.map((item)=> (
        <CartItem className key={item.id} {...item} />
      ))}
      </section>

      <section className="detalle-total">        
      <Link className="ir-pagar" to='/checkout'>Ir a pagar</Link>      
      <h3>Total: ¢{total}</h3>
      <div>
        <button className="limpiar-carro" onClick={clearCart}>Limpiar Carrito</button>
      </div>    
      </section>      
    </div>
    </div>
  );
}

export default Cart
