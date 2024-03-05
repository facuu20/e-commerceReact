import React, { useContext } from 'react'
import { PiCarThin } from "react-icons/pi";
import './CarWidget.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../cartContext';

const CarWidget = () => {
  const { cantidadCarrito } = useContext(CartContext);

  return (
    <div className='container'>
      <Link to="/carrito" className='link-button'>
        <button className='buton'>
          <PiCarThin />
          <span>{cantidadCarrito()}</span>
        </button>
      </Link>
    </div>
  )
}

export default CarWidget;
