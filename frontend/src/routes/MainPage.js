import React,{useContext} from 'react';
import {cartContext} from '../Routes';
import Product from '../components/Product';

function MainPage() {
    const cartOperations = useContext(cartContext);

    return (
        <div className='mainpage'>
            <h2>Products</h2>
            <div>
                {cartOperations.products.map((product)=>
                    <Product key={product.id} product={product} onAdd={cartOperations.onAdd}/>
                )}
            </div>
        </div>
    )
}

export default MainPage
