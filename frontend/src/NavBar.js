import React from 'react'
import {NavLink} from 'react-router-dom';

function NavBar() {

    return (
        <div className='navbar'>
            <div className='navtitle'>Seeder.com</div>
            <nav className='navright'>
                <NavLink to='/' exact={true} className='navitem' activeStyle={{fontWeight:'bold',color:'red'}} style={{textDecoration:'none'}}>Home</NavLink>
                <NavLink to='/login' className='navitem' activeStyle={{fontWeight:'bold',color:'red'}} style={{textDecoration:'none'}}>Login</NavLink>
                <NavLink to='/private' className='navitem' activeStyle={{fontWeight:'bold',color:'red'}} style={{textDecoration:'none'}}>Cart</NavLink>
            </nav>
        </div>
    )
}

export default NavBar
