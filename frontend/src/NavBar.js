import React,{useContext} from 'react'
import {NavLink} from 'react-router-dom';
import {cartContext} from './Routes';

function NavBar() {
    const cartOperations = useContext(cartContext);

    return (
        <div className='navbar'>
            <div className='navtitle'>Seeder.com</div>
            <nav className='navright'>
                <NavLink to='/' exact={true} className='navitem' activeStyle={{fontWeight:'bold',color:'red'}} style={{textDecoration:'none'}}>Home</NavLink>
                <NavLink to='/login' className='navitem' activeStyle={{fontWeight:'bold',color:'red'}} style={{textDecoration:'none'}}>Login</NavLink>
                <NavLink to='/cart' className='navitem' activeStyle={{fontWeight:'bold',color:'red'}} style={{textDecoration:'none'}}>Cart</NavLink>
                {cartOperations.cartList.length?<button className='badge'>{cartOperations.cartList.length}</button>:null}
            </nav>
        </div>
    )
}

export default NavBar
