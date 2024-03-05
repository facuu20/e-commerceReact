import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { CartProvider } from './cartContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carrito from './Carrito';
import Checkout from './Components/Checkout';


function App() {
  
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
            
            
           
            
            
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;