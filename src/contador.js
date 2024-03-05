
import React from "react"

const Contador = ({contador, sumar, restar, agregarCarrito})=>{
  
  return (
    <div>
      <div>
        <h4>Articulos agregados {contador}</h4>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>


      </div>
      <button onClick={agregarCarrito}>Agregar al carrito</button>
    </div>
  )
}
  
export default Contador

