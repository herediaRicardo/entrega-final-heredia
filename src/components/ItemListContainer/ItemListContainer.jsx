import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useNotification } from "../../context/NotificationContext";

export default function ItemListContainer(){

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()
    const {setNotification} = useNotification()

    useEffect(()=>{
        setLoading(true)
        const collectionRef = categoryId 
        ? query(collection(db, "productos"), where("category", "==", categoryId))
        : collection(db, "productos")

        getDocs(collectionRef)
          .then((querySnapshot)=>{
            const product = querySnapshot.docs.map((doc)=>{
                return {id: doc.id, ...doc.data()}
            })
            setProduct(product)
          })
          .catch(() => {
            setNotification("danger", `No es posible cargar los productos`)
          })
          .finally(()=>{
            setLoading(false);
          })
    },[categoryId])

    return(
        <div>
            <h1>Bienvenidos a la tienda del emporio y armas de Masse Goskey.</h1>
            <ItemList products={product} />
        </div>
       )
}

