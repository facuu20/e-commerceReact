import React, { useContext, useState } from 'react'
import { CartContext } from '../cartContext'
import { useForm } from 'react-hook-form'
import {collection, addDoc} from "firebase/firestore"
import { db } from './firebase/datafirebase'


const Checkout = () => {

    const [pedidoId, setPedidoId]= useState("")

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const { register, handleSubmit } = useForm();
    const comprar = (data) => {
const pedido = {
    cliente: data,
    productos: carrito,
    total: precioTotal()
}
console.log(pedido)
const pedidosRef = collection(db, "pedidos");
addDoc(pedidosRef, pedido)
.then((doc)=>{
setPedidoId(doc.id)
vaciarCarrito()
}
)
    }

    if (pedidoId) {
       return( <div>
        <h1>Gracias por tu compra</h1>
        <p>El ID de tu compra es {pedidoId}</p>
        </div>
   ) }
    return (
        <div><h1>Finalizar compra</h1>
            <form onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder='Ingresa tu nombre'{...register("nombre")}/>
                <input type="email" placeholder='Ingresa tu email'{...register("email")}/>
                <input type="phone" placeholder='Ingresa tu numero'{...register("telefono")}/>
                <button type="submit">Comprar </button>
            </form>

        </div>
    )
}

export default Checkout
