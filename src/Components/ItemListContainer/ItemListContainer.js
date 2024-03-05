import React, { useEffect, useState } from 'react';
import ItemList from '../itemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/datafirebase';


const ItemListContainer = () => {
  const [products, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos")
  const categoria = useParams().categoria;
  
  
  
  useEffect(() => {

   const productosRef = collection(db, "productos")
   const q = categoria ? query(productosRef, where("categoria", "==", categoria)): productosRef;


    getDocs(q)
    .then((resp)=> {
      setProductos(
        resp.docs.map((doc) =>{
          return{...doc.data(), id: doc.id}
        })
      )
    } )
  
  
  
  }, [categoria])
  
  
  
  return (
    <div>
<ItemList products={products} titulo={titulo}/>
    </div>
  )
  }

export default ItemListContainer;

