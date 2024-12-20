import "./app.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Us from './components/Us/Us';
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from "./context/NotificationContext";


function App() {

  return (
    <BrowserRouter>
    <NotificationProvider>
      <CartProvider>
        <NavBar/>
         <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/nosotros" element={<Us />} />
          <Route path="*" element={<h1>404</h1>} />
         </Routes>
        </CartProvider>
      </NotificationProvider>
    </BrowserRouter>
  );
}

export default App
