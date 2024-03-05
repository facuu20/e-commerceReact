import React from 'react';
import Item from './item';

const ItemList = ( {products, titulo }) => {
  return (
    <div>
      <h2>{titulo}</h2>
      <div className='listCards'>

      {products.map((product) => <Item key={product.id} product={product}/>)}
      </div>
    </div>
  );
};

export default ItemList;
