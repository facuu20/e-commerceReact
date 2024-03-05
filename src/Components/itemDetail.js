import React, { useState, useContext } from 'react';
import Contador from '../contador'
import { CartContext } from '../cartContext';

const ItemDetail = ({item}) => {
  const [contador, setContador] = useState(1)
  
  const {carrito, agregarCarrito} = useContext(CartContext)
  
  const restar = () => {
    contador > 1 &&
    setContador(contador - 1);
  }
  const sumar = () => {
    contador < item.stock &&
      setContador(contador + 1);
  }

  return (
    <div className='containerDetail'>
        <div className='producto-detalle'>
            <h3>{item.name}</h3>
            <img src={item.img}></img>
            <p>{item.description}</p>
        </div>
      <div>

<Contador 
         contador={contador} 
         sumar={sumar}
          restar={restar} 
         agregarCarrito={()=>{agregarCarrito(item, contador)}}/>
      </div>
    </div>
  )
}

export default ItemDetail
