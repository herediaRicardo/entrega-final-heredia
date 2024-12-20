import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import {addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import {db} from "../../services/firebase"

function Checkout() {
  const [orderCreated, setOrderCreated] = useState(false);
  const [buyer, setBuyer] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    email: "",
  });

  const { cart, totalQuantity, getTotal, clearCart } = useCart();
  const total = getTotal();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer((prevBuyer) => ({
      ...prevBuyer,
      [name]: value,
    }));
  };

  const crateOrder = async () => {
    try {
      const objOrder = {
        buyer,
        items: cart,
        totalQuantity,
        total,
        date: new Date(),
      };

      const ids = cart.map((item) => item.id);
      const productRef = collection(db, "products");

      const productsAddedFromFirestore = await getDocs(
        query(productRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestore;

      const outOfStock = [];
      const batch = writeBatch(db);

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);
        console.log(`El id de su orden es: ${orderAdded.id}`);
        setOrderCreated(true);
        clearCart();
      } else {
        console.log("Hay productos sin stock");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (orderCreated) {
    return <h1>La orden fue creada correctamente</h1>;
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          crateOrder();
        }}
      >
        <label>Nombre</label>
        <input
          type="text"
          name="firstName"
          value={buyer.firstName}
          onChange={handleChange}
        />
        <br />
        <label>Apellido</label>
        <input
          type="text"
          name="lastName"
          value={buyer.lastName}
          onChange={handleChange}
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={buyer.email}
          onChange={handleChange}
        />
        <br />
        <label>Telefono</label>
        <input
          type="number"
          name="phone"
          value={buyer.phone}
          onChange={handleChange}
        />
        <br />
        <label>Dirección</label>
        <input
          type="text"
          name="address"
          value={buyer.address}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Generar Orden de Compra</button>
      </form>
    </div>
  );
}

export default Checkout;