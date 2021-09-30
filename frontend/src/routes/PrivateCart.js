import React,{useContext} from 'react'
import {Route,Redirect} from 'react-router-dom';
import {authContext} from '../Routes';

function PrivateCart({component:CartPage, ...rest}) {
    const auth = useContext(authContext);
    return (
        <Route {...rest}
            render = {routeProps => auth.user ? <CartPage {...routeProps}/>
                                         : <Redirect to = '/login'/>} 
        />
        // <></>
    )
}

export default PrivateCart;
