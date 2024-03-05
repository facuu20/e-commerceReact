import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();


const carritoInicial= JSON.parse(localStorage.getItem("carrito")) || [];




export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoInicial);
    
    const agregarCarrito = (item, contador) => {
        const itemAgregado = { ...item, contador };
        

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.contador += contador;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
    }
    const cantidadCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.contador, 0)
    }
    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.price * prod.contador, 0)
    }
    const vaciarCarrito = () => {
        setCarrito([]);
    }
useEffect(()=>{
    localStorage.setItem("carrito", JSON.stringify(carrito))
},[carrito]

)

    return (<CartContext.Provider value={{ 
        carrito, 
        agregarCarrito, 
        cantidadCarrito, 
        precioTotal, 
        vaciarCarrito }}>

        {children}
    </CartContext.Provider>)
}