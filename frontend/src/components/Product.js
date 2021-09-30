import React,{useContext} from 'react';
import {cartContext} from '../Routes';

function Product(props) {
  const cartOperations = useContext(cartContext)
  const {product} = props

  return (
    <div>
      <div><b>{product.name}</b></div>
      <div>${product.price}</div>
      <button onClick={()=>cartOperations.onAdd(product)}>Add to Cart</button>
    </div>
  );
}

export default Product