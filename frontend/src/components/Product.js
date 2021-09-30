import React,{useState,useContext} from 'react';
import {cartContext} from '../Routes';

function Product(props) {
  const cartOperations = useContext(cartContext)
  const {product} = props
  const [addStatus,setAddStatus] = useState(false);

  return (
    <div>
      <div><b>{product.name}</b></div>
      <div>${product.price}</div>
      <button onClick={()=>setAddStatus(true)}>Add to Cart</button>
      {addStatus ? (<div>
                    <input type='text' placeholder='Enter quantity'></input> <button onClick={()=>{setAddStatus(false);cartOperations.onAdd(product)}}>Confirm</button>
                    </div>) 
                 : (<div></div>)
      }
    </div>
  );
}

export default Product;