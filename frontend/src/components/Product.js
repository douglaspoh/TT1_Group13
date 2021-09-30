import React,{useContext} from 'react';
import {cartContext} from '../Routes';

function Product(props) {
  const cartOperations = useContext(cartContext)
  const {product} = props

  return (
    <div>
      <div><b>{product.name}</b></div>
      <div>${product.price}</div>
      <button onClick={()=>cartOperations.firstAdd(product)}>Add to Cart</button>
      {cartOperations.addStatus ? (<div>
                                   <input type='text' placeholder='Enter quantity'></input> <button onClick={()=>cartOperations.onAdd(product)}>Confirm</button>
                                   </div>) 
                                : (<div></div>)
      }
    </div>
  );
}

export default Product;