import React,{useContext} from 'react';
import { cartContext } from '../Routes';

function CartPage() {
    const cartOperations = useContext(cartContext);

    return (
        <div className='cartpage'>
            <h2>Cart Items</h2>
            <div>
                {cartOperations.cartList.length===0&&<div>Cart is empty</div>}
                {cartOperations.cartList.map((item)=> (
                <div key={item.id} className="row">
                <div className='col-2'>{item.name}</div>
                <div className='col-2'>
                    <button onClick={()=>cartOperations.onAdd(item)} className='add'>+</button>
                    <button onClick={()=>cartOperations.onRemove(item)} className='remove'>-</button>
                    <button onClick={()=>cartOperations.onDelete(item)} className='delete'>x</button>
                </div>
                <div className="col-2 text-right">{item.qty} x ${item.price}</div>
                </div>
                ))
                }
                <hr></hr>
                {cartOperations.cartList.length!==0 && <div>Total Price: ${cartOperations.cartList.reduce((a,b)=>a+b.price*b.qty,0)}</div>}
            </div>

            <button onClick={()=>cartOperations.onSubmit(cartOperations.cartList)} className='submitOrder'>Place Oder</button>
        </div>
    )
}

export default CartPage;
