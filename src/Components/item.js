import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const item = ({ product }) => {
  return (
    <div className='cards'>
      <h3>
        {product.name}

      </h3>
      <div className='img'>
     <img src={product.img}></img>

      </div>
      
      <p>
        {product.price} U$D
      </p>
      <div className='itembutton'>
      <Link to={`/item/${product.id}`}>Ver mas....  </Link>
      </div>

    </div>
  )
}

export default item