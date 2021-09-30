import React from 'react'
import {NavLink} from 'react-router-dom';

function NavBar() {

    return (
        <div className='navbar'>
            <div className='navtitle'>Seeder.com</div>
            <nav className='navright'>
                <NavLink to='/' exact={true} className='navitem' activeStyle={{fontWeight:'bold',color:'red'}} style={{textDecoration:'none'}}>Home</NavLink>
                <NavLink to='/login' className='navitem' activeStyle={{fontWeight:'bold',color:'red'}} style={{textDecoration:'none'}}>Login</NavLink>
<<<<<<< HEAD
                <NavLink to='/cart' className='navitem' activeStyle={{fontWeight:'bold',color:'red'}} style={{textDecoration:'none'}}>Cart</NavLink>
=======
                <NavLink to='/private' className='navitem' activeStyle={{fontWeight:'bold',color:'red'}} style={{textDecoration:'none'}}>Cart</NavLink>
                {/* <NavLink to='/cart' className='navitem' activeStyle={{fontWeight:'bold',color:'red'}} style={{textDecoration:'none'}}>test</NavLink> */}
        
>>>>>>> d9464b12b816ca47db1f5a291f2da8633a690331
            </nav>
        </div>
    )
}

export default NavBar
