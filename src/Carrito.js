import React, { useContext } from 'react'
import { CartContext } from './cartContext'
import { Link } from 'react-router-dom'

const Carrito = () => {

const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

const handleVaciar = ()=>{
    
    vaciarCarrito();
}  
return (
    <div className='containerCarrito'>
      <h1>Carrito</h1>
      {
        carrito.map((prod)=>(<div key={prod.id}> 
<br/>
            <h2>{prod.name}</h2>
            <p>Precio unidad {prod.price} U$D</p>
            <p>Precio total {prod.price * prod.contador} U$D</p>
            <p>Cantidad {prod.contador}</p>
<br/>
      </div>
          ))
      }
      
      <h3>El total de la compra es  {precioTotal()} U$D</h3>
      <button onClick={handleVaciar}>Vaciar carrito </button>
    <Link to="/checkout">Finalizar compra</Link>
    </div>
  )
}

export default Carrito
